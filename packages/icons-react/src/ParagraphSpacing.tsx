import * as React from 'react';
import type { SVGProps } from 'react';
const ParagraphSpacing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 10h-8m8-4h-8m8 8h-8m8 4h-8m-7 2V4m0 16-3-3m3 3 3-3M6 4 3 7m3-3 3 3"
    />
  </svg>
);
export default ParagraphSpacing;
