import * as React from 'react';
import type { SVGProps } from 'react';
const BellPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.3542 21c.7051.6224 1.6314 1 2.6458 1a3.984 3.984 0 0 0 2.6458-1M18 8V2m-3 3h6m-8-2.9161a6 6 0 0 0-5.2426 1.6735A6 6 0 0 0 6 8c0 3.0902-.7795 5.206-1.6503 6.6054-.7346 1.1805-1.1018 1.7707-1.0884 1.9354.015.1823.0536.2518.2005.3608C3.5945 17 4.1926 17 5.3888 17h13.2224c1.1962 0 1.7943 0 1.927-.0984.1469-.109.1855-.1785.2004-.3608.0135-.1647-.3538-.755-1.0884-1.9356-.492-.7908-.9549-1.8104-1.2645-3.1052"
    />
  </svg>
);
export default BellPlus;
