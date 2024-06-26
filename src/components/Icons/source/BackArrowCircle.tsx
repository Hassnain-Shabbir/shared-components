import React from "react";
import { FC } from "react";

import { IconProps } from "../index";

const BackArrowCircle: FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="256"
    height="256"
    viewBox="0 0 256 256"
    xmlSpace="preserve"
  >
    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
      <path
        d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 7 c 20.953 0 38 17.047 38 38 S 65.953 83 45 83 S 7 65.953 7 45 S 24.047 7 45 7 z"
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
        fill="currentColor"
      />
      <path
        d="M 53.478 65.456 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 41.472 45 l 14.481 -14.481 c 1.367 -1.366 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.365 -4.95 0 L 34.048 42.525 c -1.367 1.366 -1.367 3.583 0 4.949 l 16.955 16.956 C 51.687 65.114 52.583 65.456 53.478 65.456 z"
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default BackArrowCircle;
