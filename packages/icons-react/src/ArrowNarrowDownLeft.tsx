import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowNarrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 6 6 18m0 0h8m-8 0v-8"
    />
  </svg>
);
export default ArrowNarrowDownLeft;
