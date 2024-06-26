import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyEthereum = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 11.0001 12 13l8-2m-16 .0001L12 2m-8 9.0001 8-2M20 11l-8-9m8 9-8-2m0-7v7m-6.5 6 6.5001 7L18.5 15 12 16.5z"
    />
  </svg>
);
export default CurrencyEthereum;
