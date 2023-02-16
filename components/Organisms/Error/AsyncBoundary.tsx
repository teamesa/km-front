import { PropsWithChildren, Suspense } from 'react';

import ErrorBoundary from 'components/Organisms/Error/Errorboundary';

interface Props {
  suspenseFallback: React.ReactNode;
  errorFallback: React.ReactNode;
  children: React.ReactNode;
}

const AsyncBoundary = ({
  suspenseFallback,
  errorFallback,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <ErrorBoundary errorFallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
