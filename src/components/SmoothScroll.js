import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {

  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const setBodyHeight = () => document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height}px`;

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    requestAnimationFrame(() => smoothScrollingHandler());
  };

  useEffect(() => {
    setBodyHeight();
    new ResizeObserver(setBodyHeight).observe(scrollingContainerRef.current);
  },[]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  return (
    <div className="smooth-scroll">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
