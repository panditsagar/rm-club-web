'use client';

import {
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from 'react';
import { gsap } from 'gsap';

const TextType = ({
  text,
  as: Component = 'div',

  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,

  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,

  textColors = [],

  // ✅ NEW: support these props (and prevent DOM warnings)
  variableSpeedEnabled = false,
  variableSpeed, // can be { min, max }
  variableSpeedMin,
  variableSpeedMax,

  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,

  ...restProps
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  // ✅ Resolve variable speed ONLY when enabled
  const resolvedVariableSpeed = useMemo(() => {
    if (!variableSpeedEnabled) return null;

    if (variableSpeed && typeof variableSpeed === 'object') {
      const min = Number(variableSpeed.min);
      const max = Number(variableSpeed.max);
      if (Number.isFinite(min) && Number.isFinite(max) && max > min) {
        return { min, max };
      }
    }

    const min = Number(variableSpeedMin);
    const max = Number(variableSpeedMax);
    if (Number.isFinite(min) && Number.isFinite(max) && max > min) {
      return { min, max };
    }

    return null;
  }, [variableSpeedEnabled, variableSpeed, variableSpeedMin, variableSpeedMax]);

  const getRandomSpeed = useCallback(() => {
    if (!resolvedVariableSpeed) return typingSpeed;
    const { min, max } = resolvedVariableSpeed;
    return Math.random() * (max - min) + min;
  }, [resolvedVariableSpeed, typingSpeed]);

  const getCurrentTextColor = useCallback(() => {
    if (!textColors.length) return undefined;
    return textColors[currentTextIndex % textColors.length];
  }, [textColors, currentTextIndex]);

  // ✅ Prevent custom props leaking to DOM when Component is a string tag
  const propsForElement = useMemo(() => {
    if (typeof Component !== 'string') return restProps;

    // strip any custom props that might be forwarded accidentally
    const {
      variableSpeedEnabled: _vse,
      variableSpeed: _vs,
      variableSpeedMin: _vmin,
      variableSpeedMax: _vmax,
      ...safe
    } = restProps;

    return safe;
  }, [Component, restProps]);

  // Start on visible
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Cursor blink
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    gsap.killTweensOf(cursorRef.current);
    gsap.set(cursorRef.current, { opacity: 1 });
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    return () => gsap.killTweensOf(cursorRef.current);
  }, [showCursor, cursorBlinkDuration]);

  // Typing / deleting logic
  useEffect(() => {
    if (!isVisible) return;

    let timeout;

    const currentText = textArray[currentTextIndex] ?? '';
    const processedText = reverseMode
      ? currentText.split('').reverse().join('')
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);

          // sentence complete callback after finishing deletion of a sentence
          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          // stop if no loop and last item
          if (currentTextIndex === textArray.length - 1 && !loop) return;

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);

          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + processedText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          }, resolvedVariableSpeed ? getRandomSpeed() : typingSpeed);
        } else {
          // finished typing current sentence
          if (!loop && currentTextIndex === textArray.length - 1) return;

          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    // initial delay on fresh start
    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    resolvedVariableSpeed,
    getRandomSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < (textArray[currentTextIndex]?.length ?? 0) || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...propsForElement,
    },
    <span
      className="text-type__content"
      style={{ color: getCurrentTextColor() || 'inherit' }}
    >
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${
          shouldHideCursor ? 'text-type__cursor--hidden' : ''
        }`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
