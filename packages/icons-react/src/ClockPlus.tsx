import * as React from 'react';
import type { SVGProps } from 'react';
const ClockPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.9208 13.265C21.9731 12.8507 22 12.4285 22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12s4.4772 10 10 10a10.1 10.1 0 0 0 1.285-.0818M12 6v6l3.7384 1.8692M19 22v-6m-3 3h6"
    />
  </svg>
);
export default ClockPlus;
