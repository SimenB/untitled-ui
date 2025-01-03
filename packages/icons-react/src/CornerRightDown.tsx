import * as React from 'react';
import type { SVGProps } from 'react';
const CornerRightDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4h3.4c3.3603 0 5.0405 0 6.3239.654a6 6 0 0 1 2.6221 2.622C16 8.5596 16 10.2398 16 13.6V20m0 0-5-5m5 5 5-5"
    />
  </svg>
);
export default CornerRightDown;
