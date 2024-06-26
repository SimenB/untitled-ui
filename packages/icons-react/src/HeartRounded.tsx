import * as React from 'react';
import type { SVGProps } from 'react';
const HeartRounded = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.1111 3C19.6333 3 22 6.3525 22 9.48 22 15.8138 12.1778 21 12 21S2 15.8138 2 9.48C2 6.3525 4.3667 3 7.8889 3 9.911 3 11.2333 4.0237 12 4.9238 12.7667 4.0238 14.0889 3 16.1111 3"
    />
  </svg>
);
export default HeartRounded;
