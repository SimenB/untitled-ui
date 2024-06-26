import * as React from 'react';
import type { SVGProps } from 'react';
const Mark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12c0 4.4183-3.5817 8-8 8m8-8c0-4.4183-3.5817-8-8-8m8 8h2m-10 8c-4.4183 0-8-3.5817-8-8m8 8v2M4 12c0-4.4183 3.5817-8 8-8m-8 8H2m10-8V2m3 10c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3"
    />
  </svg>
);
export default Mark;
