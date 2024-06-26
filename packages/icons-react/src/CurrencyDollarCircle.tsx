import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyDollarCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 14.6667C8.5 15.9553 9.5447 17 10.8333 17H13c1.3807 0 2.5-1.1193 2.5-2.5S14.3807 12 13 12h-2c-1.3807 0-2.5-1.1193-2.5-2.5S9.6193 7 11 7h2.1667C14.4553 7 15.5 8.0447 15.5 9.3333M12 5.5V7m0 10v1.5M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    />
  </svg>
);
export default CurrencyDollarCircle;
