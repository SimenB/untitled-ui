import * as React from 'react';
import type { SVGProps } from 'react';
const Mouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9V6m0 16c-3.866 0-7-3.134-7-7V9c0-3.866 3.134-7 7-7s7 3.134 7 7v6c0 3.866-3.134 7-7 7"
    />
  </svg>
);
export default Mouse;
