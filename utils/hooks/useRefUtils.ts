import { useState, useRef, useEffect } from 'react';

export default function useRefUtils() {
  const [height, setHeight] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref?.current?.offsetHeight) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return { ref, height };
}
