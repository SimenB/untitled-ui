import * as React from 'react';
import type { SVGProps } from 'react';
const MedicalCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.8333 7.3c0-.28 0-.42-.0545-.527a.5.5 0 0 0-.2185-.2185c-.1069-.0545-.2469-.0545-.527-.0545h-2.0666c-.2801 0-.4201 0-.527.0545a.5.5 0 0 0-.2185.2185c-.0545.107-.0545.247-.0545.527v2.0667c0 .28 0 .42-.0545.527a.5.5 0 0 1-.2185.2185c-.107.0545-.247.0545-.527.0545H7.3c-.28 0-.42 0-.527.0545a.5.5 0 0 0-.2185.2185c-.0545.1069-.0545.2469-.0545.527v2.0666c0 .2801 0 .4201.0545.527a.5.5 0 0 0 .2185.2185c.107.0545.247.0545.527.0545h2.0667c.28 0 .42 0 .527.0545a.5.5 0 0 1 .2185.2185c.0545.107.0545.247.0545.527V16.7c0 .28 0 .42.0545.527a.5.5 0 0 0 .2185.2185c.1069.0545.2469.0545.527.0545h2.0666c.2801 0 .4201 0 .527-.0545a.5.5 0 0 0 .2185-.2185c.0545-.107.0545-.247.0545-.527v-2.0667c0-.28 0-.42.0545-.527a.5.5 0 0 1 .2185-.2185c.107-.0545.247-.0545.527-.0545H16.7c.28 0 .42 0 .527-.0545a.5.5 0 0 0 .2185-.2185c.0545-.1069.0545-.2469.0545-.527v-2.0666c0-.2801 0-.4201-.0545-.527a.5.5 0 0 0-.2185-.2185c-.107-.0545-.247-.0545-.527-.0545h-2.0667c-.28 0-.42 0-.527-.0545a.5.5 0 0 1-.2185-.2185c-.0545-.107-.0545-.247-.0545-.527z"
    />
  </svg>
);
export default MedicalCircle;
