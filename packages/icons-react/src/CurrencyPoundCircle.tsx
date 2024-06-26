import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyPoundCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 17.5H9s2-2.2556 2-5c0-1.5-1.0852-2.0133-1.1047-3.538.0013-3.018 3.6344-2.8575 4.8973-1.658M9 12.5h5m8-.5c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    />
  </svg>
);
export default CurrencyPoundCircle;
