export default function NavList({
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
      <path data-name="사각형 7" fill="none" d="M0 0h30v30H0z" />
      <g data-name="그룹 1525">
        <g
          data-name="사각형 1650"
          stroke="#000"
          strokeWidth="1.2px"
          fill={fill}
        >
          <path stroke="none" d="M0 0h10v10H0z" transform="translate(4 4)" />
          <path fill="none" d="M.6.6h8.8v8.8H.6z" transform="translate(4 4)" />
        </g>
        <g
          data-name="사각형 1652"
          stroke="#000"
          strokeWidth="1.2px"
          fill={fill}
        >
          <path stroke="none" d="M0 0h10v10H0z" transform="translate(4 16)" />
          <path fill="none" d="M.6.6h8.8v8.8H.6z" transform="translate(4 16)" />
        </g>
        <g
          data-name="사각형 1651"
          transform="translate(16 4)"
          stroke="#000"
          strokeWidth="1.2px"
          fill={fill}
        >
          <rect width="10" height="10" rx="5" stroke="none" />
          <rect x=".6" y=".6" width="8.8" height="8.8" rx="4.4" fill="none" />
        </g>
        <g
          data-name="사각형 1653"
          stroke="#000"
          strokeWidth="1.2px"
          fill={fill}
        >
          <path stroke="none" d="M0 0h10v10H0z" transform="translate(16 16)" />
          <path
            fill="none"
            d="M.6.6h8.8v8.8H.6z"
            transform="translate(16 16)"
          />
        </g>
      </g>
    </svg>
  );
}
