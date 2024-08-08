

import * as AllIcons from './components';
import {IconProps} from './_model';
const Icons: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  switch (name) {
    case 'ExitRight':
      return <AllIcons.ExitRight width={size} height={size} {...props} />;
    default:
      return null;
  }
};

export default Icons;
