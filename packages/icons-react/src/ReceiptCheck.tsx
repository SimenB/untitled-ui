import * as React from 'react';
import type { SVGProps } from 'react';
const ReceiptCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 10.5 2 2L15.5 8M20 21V7.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C17.7202 3 16.8802 3 15.2 3H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.2798 4 6.1198 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2z"
    />
  </svg>
);
export default ReceiptCheck;
