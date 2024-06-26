import * as React from 'react';
import type { SVGProps } from 'react';
const FaceHappy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 9h.01M9 9h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10m-6.5-3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-6 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2.5 8.5c2.5005 0 4.5-1.833 4.5-3.5h-9c0 1.667 1.9995 3.5 4.5 3.5"
    />
  </svg>
);
export default FaceHappy;
