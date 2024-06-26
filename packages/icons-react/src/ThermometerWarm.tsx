import * as React from 'react';
import type { SVGProps } from 'react';
const ThermometerWarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9a4 4 0 0 0-2 7.5M12 3v2M6.6 18.4l-1.4 1.4M4 13H2m4.6-5.4L5.2 6.2M20 14.5351V4c0-1.1046-.8954-2-2-2s-2 .8954-2 2v10.5351c-1.1956.6916-2 1.9843-2 3.4649 0 2.2091 1.7909 4 4 4s4-1.7909 4-4c0-1.4806-.8044-2.7733-2-3.4649"
    />
  </svg>
);
export default ThermometerWarm;
