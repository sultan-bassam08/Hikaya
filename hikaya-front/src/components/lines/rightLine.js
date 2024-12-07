import React from "react";

const RightLine = ({ customStyles = {} }) => {
  const defaultStyles = {
    position: "absolute",
    zIndex: "0",
    width: "100%",
    height: "100%",
  };

  const combinedStyles = { ...defaultStyles, ...customStyles };
  return (
    <div className="svg" style={combinedStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        viewBox="0 0 100% 1080"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="873.047"
            y1="442.75"
            x2="873.047"
            y2="40.281"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0bbafb" />
            <stop offset="1" stopColor="#4285ec" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="873.047"
            y1="442.75"
            x2="873.047"
            y2="40.281"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ecdfdf" />
            <stop offset="1" stopColor="#ecdfdf" />
          </linearGradient>
        </defs>
        <path
          id="line2-big"
          className="dcls-1"
          d="M1928,299S1578.41-45.547,1444,127c-55.26,70.934-86.33,168.627-62,236,79.63,220.477-416.4-66.767-380-252,19.16-97.5-29.1,404.025-67,244C749.177-429.569-636.383,510.985-29,422c-168.165,24.637-24-280-24-280"
        />
        <path
          id="line2-big_copy"
          data-name="line2-big copy"
          className="dcls-2"
          d="M1928,299S1578.41-45.547,1444,127c-55.26,70.934-86.33,168.627-62,236,79.63,220.477-416.4-66.767-380-252,19.16-97.5-29.1,404.025-67,244C749.177-429.569-636.383,510.985-29,422c-168.165,24.637-24-280-24-280"
        />
      </svg>
    </div>
  );
};

export default RightLine;
