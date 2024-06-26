import * as React from 'react';
import type { SVGProps } from 'react';
const ClockCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.5 19 2 2 4.5-4.5m.9851-3.9501A10 10 0 0 0 22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 5.4354 4.3365 9.858 9.7385 9.9966M12 6v6l3.7384 1.8692"
    />
  </svg>
);
export default ClockCheck;
