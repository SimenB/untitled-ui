import * as React from 'react';
import type { SVGProps } from 'react';
const WatchCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 17 .4855 2.4276c.1833.9163.275 1.3745.5141 1.7172a2 2 0 0 0 .839.6878C9.2217 22 9.689 22 10.6235 22h2.7532c.9345 0 1.4017 0 1.7847-.1674a2 2 0 0 0 .8391-.6878c.2392-.3427.3308-.8009.5141-1.7172L17 17M7 7l.4855-2.4276c.1833-.9163.275-1.3745.5141-1.7172a2 2 0 0 1 .839-.6878C9.2217 2 9.689 2 10.6235 2h2.7532c.9345 0 1.4017 0 1.7847.1674.3377.1476.6281.3856.8391.6878.2392.3427.3308.8009.5141 1.7172L17 7m-5 2v3l1.5 1.5M19 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7"
    />
  </svg>
);
export default WatchCircle;
