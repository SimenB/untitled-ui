import * as React from 'react';
import type { SVGProps } from 'react';
const BookClosed = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 19v-3H7c-1.6569 0-3 1.3431-3 3m4.8 3h8c1.1201 0 1.6802 0 2.108-.218a2 2 0 0 0 .874-.874C20 20.4802 20 19.9201 20 18.8V5.2c0-1.1201 0-1.6802-.218-2.108a2 2 0 0 0-.874-.874C18.4802 2 17.9201 2 16.8 2h-8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.2798 4 5.1198 4 6.8v10.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 22 7.1198 22 8.8 22"
    />
  </svg>
);
export default BookClosed;
