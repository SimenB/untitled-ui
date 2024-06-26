import * as React from 'react';
import type { SVGProps } from 'react';
const FlashOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8 8-3.9065 4.6879c-.3488.4185-.5233.6278-.526.8046a.5.5 0 0 0 .1858.3964C3.8908 14 4.1632 14 4.708 14H12l-1 8 5-6m-.35-6h3.642c.5448 0 .8173 0 .9547.1111a.5.5 0 0 1 .1857.3964c-.0026.1768-.177.3861-.5259.8046l-1.3563 1.6276m-7.9774-8.027L13 2l-.5998 4.7977M21 21 3 3"
    />
  </svg>
);
export default FlashOff;
