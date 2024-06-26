import * as React from 'react';
import type { SVGProps } from 'react';
const CreditCardDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 17 3 3m0 0 3-3m-3 3v-7m10-4H2m3.5 9h-.3c-1.1201 0-1.6802 0-2.108-.218a2 2 0 0 1-.874-.874C2 16.4802 2 15.9201 2 14.8V7.2c0-1.1201 0-1.6802.218-2.108a2 2 0 0 1 .874-.874C3.5198 4 4.08 4 5.2 4h13.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874C22 5.5198 22 6.08 22 7.2v7.6c0 1.1201 0 1.6802-.218 2.108a2 2 0 0 1-.874.874C20.4802 18 19.9201 18 18.8 18h-.3"
    />
  </svg>
);
export default CreditCardDownload;
