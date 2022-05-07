export default function NavHome({
  width = '30',
  height = '30',
  fill = '#000',
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
        data-name="패스 1381"
        d="M181.254 89.6a.431.431 0 0 0-.2.061l-10.132 7.844a.333.333 0 0 0-.123.266V111.5a.34.34 0 0 0 .327.327h6.863a.34.34 0 0 0 .327-.327v-4.575a2.941 2.941 0 0 1 5.883 0v4.575a.34.34 0 0 0 .327.327h6.863a.339.339 0 0 0 .327-.327V97.773a.332.332 0 0 0-.122-.266l-10.132-7.844a.3.3 0 0 0-.2-.061zm0 .735 9.8 7.6v13.236h-6.21v-4.249a3.595 3.595 0 1 0-7.19 0v4.249h-6.21V97.936z"
        transform="translate(-166.254 -86.714)"
        stroke={fill}
        strokeWidth=".5px"
      />
    </svg>
  );
}
