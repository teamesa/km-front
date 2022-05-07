export default function NavMyPage({
  width = '30',
  height = '30',
  fill = 'none',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <path data-name="사각형 9" fill="none" d="M0 0h30v30H0z" />
      <g data-name="그룹 1524">
        <path
          data-name="패스 1486"
          d="M13.388 4.9A4.4 4.4 0 1 1 8.985.5a4.4 4.4 0 0 1 4.403 4.4z"
          transform="translate(6.014 3.801)"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="1.2px"
          fill={fill}
        />
        <path
          data-name="패스 1487"
          d="M.5 17.922A10.361 10.361 0 0 1 11.065 7.78 10.361 10.361 0 0 1 21.63 17.922"
          transform="translate(3.935 7.899)"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="1.2px"
          fill={fill}
        />
      </g>
    </svg>
  );
}
