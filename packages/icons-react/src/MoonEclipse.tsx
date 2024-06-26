import * as React from 'react';
import type { SVGProps } from 'react';
const MoonEclipse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.0017 6.0002c2.665 3.5448 2.6644 8.4576-.0017 12.0019M12 22c1.5711 0 3.0575-.3623 4.3803-1.0079A9 9 0 0 1 16 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9a9 9 0 0 1 .3803.0079C15.0575 2.3623 13.5711 2 12 2 6.4772 2 2 6.4772 2 12s4.4772 10 10 10"
    />
  </svg>
);
export default MoonEclipse;
