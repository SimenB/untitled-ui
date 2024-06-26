import * as React from 'react';
import type { SVGProps } from 'react';
const Asterisk01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2v20m7.0711-17.071L4.9289 19.071M22 12H2m17.0711 7.0711L4.9289 4.9289"
    />
  </svg>
);
export default Asterisk01;
