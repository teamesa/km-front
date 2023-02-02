export const ERROR: { [key: number]: { title: string; message: string } } = {
  400: {
    title: '오류안내',
    message: 'Bad Request	잘못된 요청 ex) 잘못된 파라미터, body 값',
  },
  404: {
    title: '오류안내',
    message: 'Not Found	리소스가 존재하지 않음 ex) 존재않는 itemId 등',
  },
};
