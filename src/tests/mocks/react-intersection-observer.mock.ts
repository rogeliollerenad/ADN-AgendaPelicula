export const factory = (): {
  useInView: () => {
    ref: string;
    inView: boolean;
  };
} => {
  // eslint-disable-next-line
  const { useRef } = require('react');
  return { useInView: () => ({ ref: useRef(), inView: true }) };
};
