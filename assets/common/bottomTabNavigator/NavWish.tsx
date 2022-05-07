export default function NavWish({
  width = '30',
  height = '30',
  fill = 'none',
  stroke = '#000',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <path data-name="사각형 10" fill="none" d="M0 0h30v30H0z" />
      <path
        data-name="패스 1496"
        d="M21.222 2.355a6.335 6.335 0 0 1 0 8.957l-.486.486-8.957 8.957-9.423-9.425a6.333 6.333 0 0 1 8.957-8.957l.467.467.486-.486a6.333 6.333 0 0 1 8.956.001z"
        transform="translate(3.212 4.373)"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeWidth="1.2px"
        fill={fill}
      />
    </svg>
  );
}
