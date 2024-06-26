import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyEthereumCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.5 15.5 5.5002 2.5L17.5 15.5M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10m-15.5-.5 5.5002 2.5L17.5 11.5 12.0002 5z"
    />
  </svg>
);
export default CurrencyEthereumCircle;
