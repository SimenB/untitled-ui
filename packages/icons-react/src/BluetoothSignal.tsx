import * as React from 'react';
import type { SVGProps } from 'react';
const BluetoothSignal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2 7 12 10-6 5V2l6 5L2 17M20.1445 6.5c1.1136 1.548 1.7695 3.4474 1.7695 5.5s-.6559 3.952-1.7695 5.5M17 8.8572c.6214.891.9858 1.9743.9858 3.1429s-.3644 2.252-.9858 3.1429"
    />
  </svg>
);
export default BluetoothSignal;
