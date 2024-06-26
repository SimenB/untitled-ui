import * as React from 'react';
import type { SVGProps } from 'react';
const GitCommit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 12c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4m8 0c0-2.2091-1.7909-4-4-4s-4 1.7909-4 4m8 0h6M8 12H2.0002"
    />
  </svg>
);
export default GitCommit;
