import * as React from 'react';
import type { SVGProps } from 'react';
const HelpOctagon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M2 8.5227v6.9546c0 .2445 0 .3668.0276.4819a1 1 0 0 0 .1198.2891c.0618.1009.1483.1874.3212.3603l4.9228 4.9228c.173.1729.2594.2594.3603.3212a1 1 0 0 0 .289.1198C8.156 22 8.2783 22 8.5228 22h6.9546c.2445 0 .3668 0 .4819-.0276a1 1 0 0 0 .2891-.1198c.1009-.0618.1874-.1483.3603-.3212l4.9228-4.9228c.1729-.1729.2594-.2594.3212-.3603a1 1 0 0 0 .1198-.2891C22 15.8441 22 15.7218 22 15.4773V8.5227c0-.2446 0-.3668-.0276-.482a1 1 0 0 0-.1198-.289c-.0618-.1009-.1483-.1874-.3212-.3603l-4.9228-4.9228c-.1729-.173-.2594-.2594-.3603-.3212a1 1 0 0 0-.2891-.1198C15.8441 2 15.7218 2 15.4773 2H8.5227c-.2446 0-.3668 0-.482.0276a1 1 0 0 0-.289.1198c-.1009.0618-.1874.1483-.3603.3212L2.4686 7.3914c-.173.173-.2594.2594-.3212.3603a1 1 0 0 0-.1198.289C2 8.156 2 8.2783 2 8.5228"
    />
  </svg>
);
export default HelpOctagon;
