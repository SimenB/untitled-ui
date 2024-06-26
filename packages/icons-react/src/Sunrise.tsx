import * as React from 'react';
import type { SVGProps } from 'react';
const Sunrise = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 18H2m4.3141-5.6859L4.9 10.8999m12.7859 1.4142L19.1 10.8999M22 18h-2M7 18c0-2.7614 2.2386-5 5-5s5 2.2386 5 5m5 4H2M16 6l-4-4m0 0L8 6m4-4v7"
    />
  </svg>
);
export default Sunrise;
