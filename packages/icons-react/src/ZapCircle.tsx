import * as React from 'react';
import type { SVGProps } from 'react';
const ZapCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 5.5-4.6384 6.7468c-.2792.4061-.4188.6092-.4105.778a.5.5 0 0 0 .196.3727c.1344.1025.3808.1025.8737.1025H12v5l4.6384-6.7468c.2792-.4061.4189-.6092.4105-.778a.5.5 0 0 0-.1961-.3727c-.1343-.1025-.3807-.1025-.8736-.1025H12z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10"
    />
  </svg>
);
export default ZapCircle;
