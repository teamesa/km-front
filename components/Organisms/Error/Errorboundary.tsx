import React, { Component, ErrorInfo } from 'react';

interface Prop {
  errorFallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.log('error: ', error);
    console.log('errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorFallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
