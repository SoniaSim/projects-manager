import * as Popover from '@radix-ui/react-popover';
import { ReactNode } from 'react';

const Select = ({
  isOpen,
  setIsOpen,
  trigger,
  content,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  trigger?: ReactNode;
  content?: ReactNode;
}) => {
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-sm bg-btn-background flex flex-col w-[160px] text-left"
          sideOffset={5}
        >
          {content}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Select;
