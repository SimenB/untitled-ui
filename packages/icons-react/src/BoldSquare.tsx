import * as React from 'react';
import type { SVGProps } from 'react';
const BoldSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 12H13c1.3807 0 2.5-1.1193 2.5-2.5S14.3807 7 13 7H8.5zm0 0H14c1.3807 0 2.5 1.1193 2.5 2.5S15.3807 17 14 17H8.5zm-.7 9h8.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21"
    />
  </svg>
);
export default BoldSquare;
