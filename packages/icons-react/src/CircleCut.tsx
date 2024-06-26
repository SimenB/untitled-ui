import * as React from 'react';
import type { SVGProps } from 'react';
const CircleCut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 20.6622c2.989-1.7291 5-4.9608 5-8.6622S9.989 5.0669 7 3.3378M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    />
  </svg>
);
export default CircleCut;
