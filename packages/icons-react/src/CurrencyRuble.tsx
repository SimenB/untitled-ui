import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyRuble = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 11.5h6c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4h-6zm0 0h-2m7 4h-7M8.5 4v16.5"
    />
  </svg>
);
export default CurrencyRuble;
