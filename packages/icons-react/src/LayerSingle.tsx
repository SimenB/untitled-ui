import * as React from 'react';
import type { SVGProps } from 'react';
const LayerSingle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.3578 7.179c-.1312-.0656-.1968-.0984-.2656-.1113a.5.5 0 0 0-.1844 0c-.0688.0129-.1344.0457-.2656.1113L2 12l9.6422 4.8211c.1312.0656.1968.0984.2656.1113a.5.5 0 0 0 .1844 0c.0688-.0129.1344-.0457.2656-.1113L22 12.0001z"
    />
  </svg>
);
export default LayerSingle;
