import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyRupeeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 9.9998h7M8.5 6.5h7M14 18.0002l-5.5-4.5L10 13.5c4.4447 0 4.4447-7 0-7M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    />
  </svg>
);
export default CurrencyRupeeCircle;
