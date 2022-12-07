import * as React from 'react';
import { SVGProps } from 'react';
const VolumeMin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M4.5 9.6c0-.5601 0-.8401.109-1.054a1 1 0 0 1 .437-.437C5.26 8 5.54 8 6.1 8h1.7373c.2445 0 .3668 0 .482-.0277a1 1 0 0 0 .289-.1197c.1009-.0619.1874-.1483.3603-.3213l3.1657-3.1657c.4284-.4284.6426-.6425.8265-.657a.5.5 0 0 1 .4194.1737c.1198.1403.1198.4432.1198 1.049v14.1373c0 .6058 0 .9087-.1198 1.0489a.5002.5002 0 0 1-.4194.1738c-.1839-.0145-.3981-.2287-.8265-.6571l-3.1657-3.1656c-.173-.173-.2594-.2595-.3603-.3213a1.0007 1.0007 0 0 0-.289-.1197c-.1152-.0277-.2375-.0277-.482-.0277H6.1c-.56 0-.84 0-1.054-.109a.9994.9994 0 0 1-.437-.437C4.5 15.24 4.5 14.96 4.5 14.3999v-4.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.2451 8c.7909 1.1338 1.2547 2.5127 1.2547 3.9999 0 1.4873-.4638 2.8662-1.2547 4M12.1343 4.3656 8.9686 7.5313c-.173.173-.2594.2594-.3603.3213a1 1 0 0 1-.289.1197c-.1152.0276-.2375.0276-.482.0276H6.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4.5 8.76 4.5 9.04 4.5 9.6v4.8c0 .5601 0 .8401.109 1.054a.9994.9994 0 0 0 .437.437C5.26 16 5.54 16 6.1 16h1.7373c.2445 0 .3668 0 .482.0277.102.0245.1995.0649.289.1197.1009.0618.1874.1483.3603.3213l3.1657 3.1656c.4284.4284.6426.6426.8265.6571a.5002.5002 0 0 0 .4194-.1738c.1198-.1402.1198-.4431.1198-1.0489V4.9313c0-.6058 0-.9087-.1198-1.049a.5.5 0 0 0-.4194-.1737c-.1839.0145-.3981.2286-.8265.657Z"
    />
  </svg>
);
export default VolumeMin;