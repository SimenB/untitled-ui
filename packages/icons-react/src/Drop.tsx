import * as React from 'react';
import type { SVGProps } from 'react';
const Drop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8c0-1.0609.2065-2.0736.5815-3C5.7683 8.0682 12 2 12 2s6.2317 6.0682 7.4185 9c.375.9264.5815 1.9391.5815 3"
    />
  </svg>
);
export default Drop;
