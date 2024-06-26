import * as React from 'react';
import type { SVGProps } from 'react';
const Hand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.9 11.4444v2.7778m0-2.7778V4.7778c0-.9205.7611-1.6667 1.7-1.6667s1.7.7462 1.7 1.6667m-3.4 6.6666c0-.9204-.7611-1.6666-1.7-1.6666s-1.7.7462-1.7 1.6666v2.2223C3.5 18.269 7.3056 22 12 22s8.5-3.731 8.5-8.3333V8.1111c0-.9205-.7611-1.6667-1.7-1.6667s-1.7.7462-1.7 1.6667m-6.8-3.3333v6.1111m0-6.1111V3.6667C10.3 2.7462 11.0611 2 12 2s1.7.7462 1.7 1.6667v1.111m0 0v6.1112m0-6.1111c0-.9205.7611-1.6667 1.7-1.6667s1.7.7462 1.7 1.6667V8.111m0 0v2.7778"
    />
  </svg>
);
export default Hand;
