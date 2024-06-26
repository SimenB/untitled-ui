import * as React from 'react';
import type { SVGProps } from 'react';
const Anchor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3432-3 3 1.3431 3 3 3m0 0v14m0 0A10.0003 10.0003 0 0 1 2 12h3m7 10a10.0003 10.0003 0 0 0 10-10h-3"
    />
  </svg>
);
export default Anchor;
