export default function StarRating({
  width = '10',
  height = '9.511',
  fill = '#999',
  viewBox = '0 0 10 9.511',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path
        data-name="*star"
        d="m75.007 13.7 1.545 3.131 3.455.5-2.5 2.437.59 3.441-3.09-1.625-3.09 1.625.59-3.441-2.5-2.437 3.455-.5z"
        transform="translate(-70.007 -13.703)"
        fill={fill}
      />
    </svg>
  );
}
