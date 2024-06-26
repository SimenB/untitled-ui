import * as React from 'react';
import type { SVGProps } from 'react';
const AtSign = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94M16 12c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4"
    />
  </svg>
);
export default AtSign;
