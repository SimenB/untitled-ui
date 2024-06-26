import * as React from 'react';
import type { SVGProps } from 'react';
const AnnotationCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 11 2 2 4.5-4.5M9.9 19.2l1.46 1.9467c.2171.2895.3257.4342.4588.486a.5.5 0 0 0 .3624 0c.1331-.0518.2417-.1965.4588-.486L14.1 19.2c.2931-.3909.4397-.5863.6185-.7355a2 2 0 0 1 .822-.411C15.7671 18 16.0114 18 16.5 18c1.3978 0 2.0967 0 2.6481-.2284a3 3 0 0 0 1.6235-1.6235C21 15.5967 21 14.8978 21 13.5V7.8c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v5.7c0 1.3978 0 2.0967.2284 2.6481a3 3 0 0 0 1.6236 1.6235C5.4033 18 6.1022 18 7.5 18c.4886 0 .7329 0 .9595.0535.3022.0713.5836.2121.822.411.1788.1492.3254.3446.6185.7355"
    />
  </svg>
);
export default AnnotationCheck;
