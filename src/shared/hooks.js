import { useRef } from 'react';

export const useClosure = (callback) => {
  const cbRef = useRef();
  cbRef.current = callback;
  return () => {
    return cbRef.current();
  };
};
