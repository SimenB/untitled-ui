import * as React from 'react';
import type { SVGProps } from 'react';
const BatteryMid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 10v4m4-4v4M22 13v-2M6.8 18h7.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 15.7202 19 14.8802 19 13.2v-2.4c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C16.7202 6 15.8802 6 14.2 6H6.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C2 8.2798 2 9.1198 2 10.8v2.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C4.2798 18 5.1198 18 6.8 18"
    />
  </svg>
);
export default BatteryMid;
