import * as React from 'react';
import type { SVGProps } from 'react';
const BluetoothOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6 7 12 10-6 5V2l6 5L6 17"
    />
  </svg>
);
export default BluetoothOn;
