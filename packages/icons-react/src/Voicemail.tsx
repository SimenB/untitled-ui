import * as React from 'react';
import type { SVGProps } from 'react';
const Voicemail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 16h12M6 16c2.2091 0 4-1.7909 4-4S8.2091 8 6 8s-4 1.7909-4 4 1.7909 4 4 4m12 0c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4-4 1.7909-4 4 1.7909 4 4 4"
    />
  </svg>
);
export default Voicemail;
