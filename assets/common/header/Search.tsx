export default function Search({
  width = '19.436',
  height = '19.312',
  fill = '#000',
  viewBox = '0 0 19.436 19.312',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <g data-name="*search" transform="translate(.1 .1)">
        <circle
          data-name="타원 233"
          cx="7.625"
          cy="7.625"
          r="7.625"
          transform="translate(.5 .5)"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
        />
        <path
          data-name="선 976"
          transform="translate(13.561 13.473)"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2px"
          d="M4.927 4.891 0 0"
        />
      </g>
    </svg>
  );
}
