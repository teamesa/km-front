export default function HeaderHome({
  width = '18',
  height = '18',
  fill = '#000',
  viewBox = '0 0 17.637 18.708',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path
        data-name="패스 1381"
        d="M179.364 89.6a.353.353 0 0 0-.167.05l-8.3 6.426a.272.272 0 0 0-.1.218v11.246a.278.278 0 0 0 .268.268h5.623a.278.278 0 0 0 .268-.268v-3.748a2.41 2.41 0 1 1 4.819 0v3.748a.278.278 0 0 0 .268.268h5.623a.278.278 0 0 0 .268-.268V96.3a.272.272 0 0 0-.1-.218l-8.3-6.426a.241.241 0 0 0-.167-.05zm0 .6 8.036 6.23v10.844h-5.087v-3.481a2.945 2.945 0 1 0-5.89 0v3.481h-5.087V96.43z"
        transform="translate(-170.546 -89.352)"
        stroke={fill}
        strokeWidth=".5px"
      />
    </svg>
  );
}
