export const Folder = ({ width = '50', height = '50' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <defs>
        <filter
          id="wlz4kabgza"
          x="0"
          y="0"
          width="50"
          height="50"
          filterUnits="userSpaceOnUse"
        >
          <feOffset />
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feFlood floodOpacity=".22" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <path
        data-name="패스 1632"
        d="M25 0A25 25 0 1 1 0 25 25 25 0 0 1 25 0"
        filter="url(#wlz4kabgza)"
      />
      <path
        data-name="패스 1633"
        d="M36.024 34.964H13.976a.516.516 0 0 1-.515-.515v-18.9a.516.516 0 0 1 .515-.516h6.185a.515.515 0 0 1 .33.12l1.715 1.429a.112.112 0 0 0 .073.026h13.745a.516.516 0 0 1 .515.515v17.326a.516.516 0 0 1-.515.515m-21.533-1.03h21.018V21.1H14.491zm0-13.859h21.018V17.64H22.051a.518.518 0 0 1-.33-.119l-1.746-1.456h-5.484z"
        fill="#fff"
      />
      <path
        data-name="패스 1634"
        d="M13.976 15.236a.315.315 0 0 0-.315.315v18.9a.315.315 0 0 0 .315.315h22.048a.315.315 0 0 0 .315-.315V17.126a.315.315 0 0 0-.315-.315H22.279a.314.314 0 0 1-.2-.073l-1.715-1.429a.314.314 0 0 0-.2-.073zm21.733 4.882a.157.157 0 0 1-.158.157h-21.1a.157.157 0 0 1-.157-.157v-4.095a.157.157 0 0 1 .157-.157h5.539a.16.16 0 0 1 .1.036l1.759 1.466a.314.314 0 0 0 .2.073h13.5a.157.157 0 0 1 .157.157v2.52m-.157 14.016h-21.1a.157.157 0 0 1-.158-.157V21.063a.158.158 0 0 1 .158-.158h21.1a.157.157 0 0 1 .157.158v12.914a.157.157 0 0 1-.157.157m-21.576-19.3h6.186a.715.715 0 0 1 .457.166l1.691 1.409h13.717a.715.715 0 0 1 .715.715v17.325a.716.716 0 0 1-.715.715H13.976a.716.716 0 0 1-.715-.715v-18.9a.716.716 0 0 1 .715-.715m5.927 1.43h-5.212v3.609h20.618v-2.032H22.051a.711.711 0 0 1-.458-.167zm15.406 5.039H14.691v12.431h20.618z"
        fill="#fff"
      />
      <path
        data-name="패스 1635"
        d="M25 27.25z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2px"
      />
      <g transform="translate(-15 -15)">
        <path
          data-name="선 1009"
          transform="translate(40 39.27)"
          fill="none"
          stroke="#fff"
          strokeWidth="1.2px"
          d="M0 6.5V0"
        />
        <path
          data-name="선 1010"
          transform="translate(36.75 42.52)"
          fill="none"
          stroke="#fff"
          strokeWidth="1.2px"
          d="M0 0h6.5"
        />
      </g>
    </svg>
  );
};
