export default function ListWish({
  width = '9.2',
  height = '8.44',
  fill = '#999',
  stroke = '#999',
  viewBox = '0 0 9.2 8.44',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path
        data-name="*heart"
        d="m74.5 27.554-.723-.707a25.209 25.209 0 0 1-2.721-2.58A3.744 3.744 0 0 1 70 21.851a2.461 2.461 0 0 1 .737-1.776 2.572 2.572 0 0 1 1.814-.722 2.788 2.788 0 0 1 1.948.81 2.788 2.788 0 0 1 1.948-.81 2.571 2.571 0 0 1 1.814.722A2.462 2.462 0 0 1 79 21.851a3.745 3.745 0 0 1-1.056 2.415 25.268 25.268 0 0 1-2.721 2.58z"
        transform="translate(-69.902 -19.254)"
        fill={fill}
        stroke={stroke}
        strokeWidth=".2px"
      />
    </svg>
  );
}
