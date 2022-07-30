export default function Loading({ width = 60, height = 60 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        data-name="패스 1661"
        d="m9.716 38.328-4.24 2.713a30.221 30.221 0 0 0 4.651 4.667l4.109-3.156a25.188 25.188 0 0 1-4.52-4.224"
        transform="translate(1.095 7.666)"
        opacity="0.6"
      />
      <path
        data-name="패스 1662"
        d="M6.574 33.008 1.781 34.5a30 30 0 0 0 2.741 5.268l4.216-2.7a24.984 24.984 0 0 1-2.164-4.06z"
        transform="translate(.356 6.602)"
        opacity="0.5"
      />
      <path
        data-name="패스 1663"
        d="M30 5.006a24.993 24.993 0 1 1-12.088 46.86l-4.252 3.27a29.994 29.994 0 1 0-10.3-38.9h5.8A24.985 24.985 0 0 1 30 5.006z"
      />
      <path
        data-name="패스 1664"
        d="M5.006 25H0c0 .456.013.91.035 1.36h5.01q-.038-.675-.039-1.36z"
        transform="translate(0 5)"
        opacity="0.25"
      />
      <path
        data-name="패스 1665"
        d="M5.323 28.534H.254a29.671 29.671 0 0 0 .894 4.136l4.781-1.488a24.8 24.8 0 0 1-.606-2.648z"
        transform="translate(.051 5.707)"
        opacity="0.35"
      />
    </svg>
  );
}
