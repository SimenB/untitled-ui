import * as React from 'react';
import type { SVGProps } from 'react';
const ClockSnooze = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 17h5l-5 5h5m.4506-9q.0492-.4935.0494-1c0-5.5228-4.4772-10-10-10S2 6.4772 2 12s4.4772 10 10 10a10.1 10.1 0 0 0 1-.0494M12 6v6l3.7384 1.8692"
    />
  </svg>
);
export default ClockSnooze;
