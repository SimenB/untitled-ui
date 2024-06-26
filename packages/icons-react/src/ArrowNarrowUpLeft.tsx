import * as React from 'react';
import type { SVGProps } from 'react';
const ArrowNarrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 18 6 6m0 0v8m0-8h8"
    />
  </svg>
);
export default ArrowNarrowUpLeft;
