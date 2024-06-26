import * as React from 'react';
import type { SVGProps } from 'react';
const ClockStopwatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9.5v4l2.5 1.5M12 5c-4.6944 0-8.5 3.8056-8.5 8.5S7.3056 22 12 22s8.5-3.8056 8.5-8.5S16.6944 5 12 5m0 0V2m-2 0h4m6.329 3.592-1.5-1.5.75.75m-15.908.75 1.5-1.5-.75.75"
    />
  </svg>
);
export default ClockStopwatch;
