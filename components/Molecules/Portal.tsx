import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const selectElement = (query: string) => {
  if (typeof window !== 'undefined') {
    return window.document.querySelector(query);
  }
  return null;
};

const Portal = ({
  children,
  query,
}: {
  children: JSX.Element;
  query: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const element = selectElement(query);
  return element && mounted ? createPortal(children, element) : null;
};

export default Portal;
