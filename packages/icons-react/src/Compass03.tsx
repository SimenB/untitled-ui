import * as React from 'react';
import type { SVGProps } from 'react';
const Compass03 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.7221 8.266c.4886-.1629.7328-.2443.8953-.1864a.5.5 0 0 1 .303.303c.0579.1625-.0235.4068-.1864.8953l-1.4875 4.4626c-.0464.1392-.0696.2087-.1091.2665a.5.5 0 0 1-.1304.1304c-.0578.0395-.1273.0627-.2665.1091L9.2779 15.734c-.4885.1629-.7328.2443-.8953.1864a.5.5 0 0 1-.303-.303c-.058-.1625.0235-.4067.1864-.8953l1.4875-4.4626c.0464-.1392.0696-.2087.1091-.2665a.5.5 0 0 1 .1304-.1304c.0578-.0395.1273-.0627.2665-.109z"
    />
  </svg>
);
export default Compass03;
