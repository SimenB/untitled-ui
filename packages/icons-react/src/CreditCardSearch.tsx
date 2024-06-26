import * as React from 'react';
import type { SVGProps } from 'react';
const CreditCardSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 22-1.5-1.5M22 10H2m20 2V8.2c0-1.1201 0-1.6802-.218-2.108a2 2 0 0 0-.874-.874C20.4802 5 19.9201 5 18.8 5H5.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C2 6.5198 2 7.08 2 8.2v7.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C3.5198 19 4.08 19 5.2 19h5.3m11-1c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5"
    />
  </svg>
);
export default CreditCardSearch;
