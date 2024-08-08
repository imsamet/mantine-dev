import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17 16.93a1 1 0 0 1-1.41 0L7.05 8.49a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0L17 15.51a1 1 0 0 1 0 1.42"
    />
    <path fill="currentColor" d="M8.46 17A1.025 1.025 0 0 1 7 15.56L15.54 7A1.025 1.025 0 1 1 17 8.44z" opacity={0.3} />
  </svg>
);
export default SvgCross;
