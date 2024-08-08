'use client';
import { ReactNode } from 'react';
import { Modal as M } from '@mantine/core';
import Heading from '../elements/heading';
import Paragraph from '../elements/paragraph';
import Icons from '../icons';

type Props = {
  opened: boolean;
  close: () => void;
  children?: ReactNode;
};
const Modal: React.FC<Props> = ({ opened, close, children }) => {
  return (
    <M
      overlayProps={{
        backgroundOpacity: 0.2,
        blur: 2,
      }}
      radius={12}
      withCloseButton={false}
      size="xl"
      opened={opened}
      onClose={close}
    >
      <div className="p-5">
        <div className="flex justify-end">
          <span className="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors" onClick={close}>
            <Icons name="Cross" size={24} />
          </span>
        </div>
        <div className="mb-10 text-center">
          <Heading type="h2">Set First Target</Heading>
          <Paragraph>Adipisicing id veniam sint ea consequat.</Paragraph>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </M>
  );
};
export default Modal;
