import * as React from 'react';
import type { SVGProps } from 'react';
const PlayCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 8.9653c0-.4772 0-.7159.0997-.8491a.5.5 0 0 1 .3647-.1991c.166-.0118.3667.1172.7682.3753l4.7206 3.0347c.3484.2239.5226.3359.5827.4783a.5.5 0 0 1 0 .3892c-.0601.1424-.2343.2544-.5827.4783l-4.7206 3.0347c-.4015.2581-.6022.3872-.7682.3753a.5.5 0 0 1-.3647-.1991C9.5 15.7506 9.5 15.512 9.5 15.0347z"
    />
  </svg>
);
export default PlayCircle;
