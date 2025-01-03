import * as React from 'react';
import type { SVGProps } from 'react';
const HeartOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.3914 2.4686c.173-.173.2594-.2594.3603-.3212a1 1 0 0 1 .289-.1198C8.156 2 8.2783 2 8.5228 2h6.9546c.2445 0 .3668 0 .4819.0276a1 1 0 0 1 .2891.1198c.1009.0618.1874.1483.3603.3212l4.9228 4.9228c.1729.173.2594.2594.3212.3603a1 1 0 0 1 .1198.289C22 8.156 22 8.2783 22 8.5228v6.9546c0 .2445 0 .3668-.0276.4819a1 1 0 0 1-.1198.2891c-.0618.1009-.1483.1874-.3212.3603l-4.9228 4.9228c-.1729.1729-.2594.2594-.3603.3212a1 1 0 0 1-.2891.1198C15.8441 22 15.7218 22 15.4773 22H8.5227c-.2446 0-.3668 0-.482-.0276a1 1 0 0 1-.289-.1198c-.1009-.0618-.1874-.1483-.3603-.3212l-4.9228-4.9228c-.173-.1729-.2594-.2594-.3212-.3603a1 1 0 0 1-.1198-.2891C2 15.8441 2 15.7218 2 15.4773V8.5227c0-.2446 0-.3668.0276-.482a1 1 0 0 1 .1198-.289c.0618-.1009.1483-.1874.3212-.3603z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.9966 9.068c-.9997-1.1688-2.6667-1.4832-3.9193-.413s-1.4288 2.8595-.4452 4.1252c.63.8107 2.2435 2.314 3.3221 3.2902.3585.3243.5377.4865.7524.5516a1.024 1.024 0 0 0 .58 0c.2146-.0651.3939-.2273.7523-.5516 1.0787-.9762 2.6921-2.4795 3.3222-3.2902.9836-1.2657.8288-3.0663-.4453-4.1252s-2.9195-.7558-3.9192.413"
      clipRule="evenodd"
    />
  </svg>
);
export default HeartOctagon;
