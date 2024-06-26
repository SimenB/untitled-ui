import * as React from 'react';
import type { SVGProps } from 'react';
const AlarmClockOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 5.1419A8 8 0 0 1 19.8582 14.5m-1.7226 3.6336a8.0005 8.0005 0 0 1-11.7924.5232 8 8 0 0 1 .518-11.7883M4 4 2 6m20 0-3-3M6 19l-2 2m17 0L3 3"
    />
  </svg>
);
export default AlarmClockOff;
