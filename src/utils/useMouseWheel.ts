"use client";

import { useState, useEffect } from "react";

type IDirection = -1 | 0 | 1;

const useMouseWheel = () => {
  const [isAnimation, setIsAnimation] = useState(false);
  const [direction, setDirection] = useState<IDirection>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  let sections: any = null;

  useEffect(() => {
    const elements: any = document.querySelectorAll("[data-wheel]");

    if (elements.length === 0) {
      return;
    }

    sections = elements;

    window.addEventListener("wheel", setHandleWheel);

    return () => {
      window.addEventListener("wheel", setHandleWheel);
    };
  }, [currentSlide, isAnimation]);

  const setHandleWheel = (event: any) => {
    /* If animated */
    if (isAnimation) {
      event.preventDefault();
      return;
    }

    let isUpDown: IDirection = Number(event.deltaY) === -100 ? -1 : 1;
    setIsAnimation(true);
    setSection(isUpDown);
  };

  const setAnimate = (current: number) => {
    const section = sections[current];
    const sectionOffset = section.offsetTop;

    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth",
    });
  };

  const setSection = (direction: IDirection) => {
    let current = currentSlide;
    console.log("current:" + current);

    if (direction > 0) {
      if (current + 1 >= sections.length) return;
      current++;
      setCurrentSlide(current);

      setAnimate(current);
    } else {
      if (current - 1 < 0) return;
      current--;
      setCurrentSlide(current);
      setAnimate(current);
    }

    stopAnimation();
  };

  const stopAnimation = () => {
    setTimeout(function () {
      setIsAnimation(false);
    }, 300);
  };

  console.log(direction);
};

export default useMouseWheel;
