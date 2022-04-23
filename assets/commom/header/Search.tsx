export default function Search({ width = '18', height = '18', fill = '#000' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18.964 18.964"
    >
      <g data-name="*search">
        <path
          data-name="패스 421"
          d="M7.988 1.038A6.95 6.95 0 0 1 12.9 12.9a6.95 6.95 0 0 1-9.826-9.826 6.9 6.9 0 0 1 4.914-2.036m0-1.038a7.988 7.988 0 1 0 5.648 2.34A7.963 7.963 0 0 0 7.988 0"
          transform="translate(.05 .05)"
          strokeWidth=".1px"
          stroke={fill}
        />
        <path
          data-name="선 1"
          transform="translate(13.464 13.464)"
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke={fill}
          d="m0 0 4.793 4.793"
        />
      </g>
    </svg>
  );
}
