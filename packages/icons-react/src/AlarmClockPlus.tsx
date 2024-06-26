import * as React from 'react';
import type { SVGProps } from 'react';
const AlarmClockPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2m-8-5v-6m-3 3h6m-3 8a8 8 0 0 0 5.6569-2.3431 8.0005 8.0005 0 0 0 0-11.3137A8.0001 8.0001 0 0 0 6.3432 18.6569 8 8 0 0 0 12 21"
    />
  </svg>
);
export default AlarmClockPlus;
