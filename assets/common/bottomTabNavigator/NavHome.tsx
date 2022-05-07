export default function NavHome({
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
      <path data-name="사각형 2" fill="none" d="M0 0h30v30H0z" />
      <path
        data-name="패스 1495"
        d="M10.287.506.511 8.08A.028.028 0 0 0 .5 8.1v13.665a.029.029 0 0 0 .029.029h6.73a.029.029 0 0 0 .029-.029V17.99a3.133 3.133 0 0 1 2.864-3.19 3 3 0 0 1 3.136 3v3.971a.029.029 0 0 0 .029.029h6.764a.029.029 0 0 0 .029-.029V8.268a.028.028 0 0 0-.011-.023L10.323.506a.03.03 0 0 0-.036 0z"
        transform="translate(4.695 3.853)"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2px"
        fill={fill}
      />
    </svg>
  );
}
