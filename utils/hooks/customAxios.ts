import axios, { AxiosRequestConfig } from 'axios';

const customAxios = () => {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_BACK_URL,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6NSwibmFtZSI6Iuq5iuydgCDrs7Tri4jtjIzsuZjsmKQg67Kg66Gc64Sk7KCcIiwiZW1haWwiOiJhenhjYTE3MzFAbmF2ZXIuY29tIiwiaW1hZ2VVcmwiOiJodHRwczovL3NzbC5wc3RhdGljLm5ldC9zdGF0aWMvcHdlL2FkZHJlc3MvaW1nX3Byb2ZpbGUucG5nIiwicm9sZSI6IlVTRVIiLCJwaG9uZU51bWJlciI6IjAxMC0zMDkyLTE3MDQiLCJiaXJ0aGRhdGUiOjc5NDA3MDAwMDAwMCwiZ2VuZGVyIjoiTUFMRSIsInByb3ZpZGVyIjoibmF2ZXIiLCJzdWIiOiI1IiwiaWF0IjoxNjUwNjQxNzQ3LCJleHAiOjE2NTE1MDU3NDd9.ryFAHHmqQMK5OflDt8nnSNWAjv13pbHmdFkhKwADiMpHrrA5irviyQ8Hv62uyhUgw6m9jPWEJ7syoxqMgOL4Vg`,
    },
  };

  return axios.create(axiosConfig);
};

export default customAxios;
