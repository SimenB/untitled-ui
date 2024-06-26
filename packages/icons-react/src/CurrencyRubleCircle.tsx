import * as React from 'react';
import type { SVGProps } from 'react';
const CurrencyRubleCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 6.5H14c1.3807 0 2.5 1.1193 2.5 2.5s-1.1193 2.5-2.5 2.5H9.5zm0 0v11m.25-6H8m5 3.25H8M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    />
  </svg>
);
export default CurrencyRubleCircle;
