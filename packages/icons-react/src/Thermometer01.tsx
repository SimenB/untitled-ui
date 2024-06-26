import * as React from 'react';
import type { SVGProps } from 'react';
const Thermometer01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 4.5C14.5 3.1193 13.3807 2 12 2S9.5 3.1193 9.5 4.5v9.2578c-1.206.8072-2 2.182-2 3.7422 0 2.4853 2.0147 4.5 4.5 4.5s4.5-2.0147 4.5-4.5c0-1.5602-.794-2.935-2-3.7422z"
    />
  </svg>
);
export default Thermometer01;
