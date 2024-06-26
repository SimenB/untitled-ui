import * as React from 'react';
import type { SVGProps } from 'react';
const Simcard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 6.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 2 7.1198 2 8.8 2h3.2118c.7337 0 1.1006 0 1.4459.0829.3061.0735.5987.1947.8672.3592.3027.1855.5621.445 1.081.9638l3.1882 3.1882c.5189.5189.7783.7783.9638 1.081.1645.2685.2857.5611.3592.8672C20 8.8876 20 9.2545 20 9.9883V17.2c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C17.7202 22 16.8802 22 15.2 22H8.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.7202 4 18.8802 4 17.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 13.8c0-.28 0-.42.0545-.527a.5.5 0 0 1 .2185-.2185C8.38 13 8.52 13 8.8 13h6.4c.28 0 .42 0 .527.0545a.5.5 0 0 1 .2185.2185C16 13.38 16 13.52 16 13.8v3.4c0 .28 0 .42-.0545.527a.5.5 0 0 1-.2185.2185C15.62 18 15.48 18 15.2 18H8.8c-.28 0-.42 0-.527-.0545a.5.5 0 0 1-.2185-.2185C8 17.62 8 17.48 8 17.2z"
    />
  </svg>
);
export default Simcard;
