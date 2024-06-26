import * as React from 'react';
import type { SVGProps } from 'react';
const CornerUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 14 4 9m0 0 5-5M4 9h6.4c3.3603 0 5.0405 0 6.3239.654a6 6 0 0 1 2.6221 2.6221C20 13.5595 20 15.2397 20 18.6V20"
    />
  </svg>
);
export default CornerUpLeft;
