import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyBitcoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 2v2m0 16v2m4-20v2m0 16v2m-6-18H14c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4H7.5 15c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4H7.5m0-16h-2m2 0v16m0 0h-2"
    />
  </svg>
);
export default CurrencyBitcoin;
