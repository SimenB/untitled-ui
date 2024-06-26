import * as React from 'react';
import type { SVGProps } from 'react';
const TerminalBrowser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 9H2m4 8.5L8.5 15 6 12.5m5 5h4M2 7.8v8.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C4.2798 21 5.1198 21 6.8 21h10.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.7202 22 17.8802 22 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C19.7202 3 18.8802 3 17.2 3H6.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.2798 2 6.1198 2 7.8"
    />
  </svg>
);
export default TerminalBrowser;
