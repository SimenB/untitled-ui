import * as React from 'react';
import type { SVGProps } from 'react';
const Globe01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12h20M2 12c0 5.5228 4.4772 10 10 10M2 12C2 6.4772 6.4772 2 12 2m10 10c0 5.5228-4.4772 10-10 10m10-10c0-5.5228-4.4772-10-10-10m0 0a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10m0-20a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"
    />
  </svg>
);
export default Globe01;
