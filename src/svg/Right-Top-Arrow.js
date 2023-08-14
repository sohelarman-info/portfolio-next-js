import * as React from "react";

function RightTopArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        d="M1.5 16.5l15-15m0 0H5.25m11.25 0v11.25"
        stroke="#313131"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightTopArrow;
