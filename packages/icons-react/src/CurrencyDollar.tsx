import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 16c0 2.2091 1.7909 4 4 4h4c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4h-4c-2.2091 0-4-1.7909-4-4s1.7909-4 4-4h4c2.2091 0 4 1.7909 4 4m-6-6v20"
    />
  </svg>
);
export default CurrencyDollar;
