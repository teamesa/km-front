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
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    console.error('error: ', error);
    console.error('errorInfo: ', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorFallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
