const fs = require('fs');
const path = require('path');

const iconsDir = path.resolve(__dirname, 'components/icons/components');
const outputFilePath = path.resolve(__dirname, 'components/icons/index.tsx');
const outputTypesFilePath = path.resolve(__dirname, 'components/icons/_model.ts');

const icons = fs
  .readdirSync(iconsDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => path.basename(file, '.tsx'));

const iconTypes = icons.map(icon => `'${icon}'`).join(' | ');
const imports = `
import * as AllIcons from './components';
import {IconProps} from './_model';`;
const cases = icons
  .map(
    icon => `
    case '${icon}':
      return <AllIcons.${icon} width={size} height={size} {...props} />;`,
  )
  .join('');

const types = `
export type IconTypes = ${iconTypes};
export type IconProps = {
  name: IconTypes;
  size?: number;
  className?: string;
};
`;
const content = `
${imports}
const Icons: React.FC<IconProps> = ({ name, size = 24, ...props }) => {
  switch (name) {${cases}
    default:
      return null;
  }
};

export default Icons;
`;

fs.writeFileSync(outputTypesFilePath, types, 'utf8');
fs.writeFileSync(outputFilePath, content, 'utf8');
console.log(`Generated ${outputFilePath}`);
