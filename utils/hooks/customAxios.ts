import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_BACK_URL,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MywibmFtZSI6IuuLpOuluCDtlITrnq3tgawg7ZmAIiwiZW1haWwiOiJrbWhrZ2hAbmF2ZXIuY29tIiwiaW1hZ2VVcmwiOiJodHRwczovL3NzbC5wc3RhdGljLm5ldC9zdGF0aWMvcHdlL2FkZHJlc3MvaW1nX3Byb2ZpbGUucG5nIiwicm9sZSI6IlVTRVIiLCJwaG9uZU51bWJlciI6IjAxMC0yOTE1LTE4NTkiLCJiaXJ0aGRhdGUiOjgzMjk4MjQwMDAwMCwiZ2VuZGVyIjoiRkVNQUxFIiwicHJvdmlkZXIiOiJuYXZlciIsInN1YiI6IjMiLCJpYXQiOjE2NTM1NjMyNzgsImV4cCI6MTY1NDQyNzI3OH0.qwoY8KR-sebREb_d7Q0c02eHMxKbv3k7Vaj1rOGTXci4QeuSSRlZjmIYDXrvht8m6jiKyTqbL1JnoX4ClCvIFw`,
    },
  };

  return axios.create(axiosConfig);
};

export default customAxios;
