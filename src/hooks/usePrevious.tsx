import {useEffect, useRef} from 'react';

export const usePrevious = (value: any) => {
  const prev = useRef(value);
  useEffect(() => {
    prev.current = value;
  })
  return prev.current;
};