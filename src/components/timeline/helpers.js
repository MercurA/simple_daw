export const getPosition = (containerRef, targetRef) => {
  return Math.round(containerRef.current.getBoundingClientRect().left - (targetRef.current.clientWidth / 2));
}
