import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyBitcoinCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 7.5h4.25C14.9926 7.5 16 8.5074 16 9.75S14.9926 12 13.75 12H9.5h4.75c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H9.5m0-9H8m1.5 0v9m0 0H8M10 6v1.5m0 9V18m3-12v1.5m0 9V18m9-6c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    />
  </svg>
);
export default CurrencyBitcoinCircle;
