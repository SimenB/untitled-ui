import * as React from 'react';
import type { SVGProps } from 'react';
const BarChart02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 20V4M6 20v-4m6 4V10"
    />
  </svg>
);
export default BarChart02;
