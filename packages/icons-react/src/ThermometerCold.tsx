import * as React from 'react';
import type { SVGProps } from 'react';
const ThermometerCold = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12h10M9 4v16M3 9l3 3-3 3m9-9L9 9 6 6m0 12 3-3 1.5 1.5m9.5-1.9649V4c0-1.1046-.8954-2-2-2s-2 .8954-2 2v10.5351c-1.1956.6916-2 1.9843-2 3.4649 0 2.2091 1.7909 4 4 4s4-1.7909 4-4c0-1.4806-.8044-2.7733-2-3.4649"
    />
  </svg>
);
export default ThermometerCold;
