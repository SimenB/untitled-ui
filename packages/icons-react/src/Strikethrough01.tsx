import * as React from 'react';
import type { SVGProps } from 'react';
const Strikethrough01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 16c0 2.2091 1.7909 4 4 4h4c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4m4-4c0-2.2091-1.7909-4-4-4h-4C7.7909 4 6 5.7909 6 8m-3 4h18"
    />
  </svg>
);
export default Strikethrough01;
