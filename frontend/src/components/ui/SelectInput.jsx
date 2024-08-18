import * as React from 'react';
import * as Select from '@radix-ui/react-select';
import { cn } from '../../lib/utils';
import { FiChevronDown } from 'react-icons/fi';

const SelectInput = React.forwardRef(
  (
    { className, options, placeholder, error, value, onChange, ...rest },
    ref
  ) => {
    return (
      <div className='relative'>
        <Select.Root value={value} onValueChange={onChange} {...rest}>
          <Select.Trigger
            ref={ref}
            className={cn(
              'flex h-10 w-full items-center justify-between border-none rounded-md bg-zinc-800 text-white px-3 py-2 text-sm placeholder:text-neutral-400',
              { 'border-red-500': error },
              className
            )}
          >
            <Select.Value placeholder={placeholder} />
            <Select.Icon>
              <FiChevronDown className='h-4 w-4' />
            </Select.Icon>
          </Select.Trigger>
          <Select.Content className='border border-zinc-600 bg-zinc-800 rounded-md shadow-lg'>
            {options.map(({ value, label }) => (
              <Select.Item
                key={value}
                value={value}
                className='px-4 py-2 hover:bg-neutral-700 focus:bg-neutral-700 cursor-pointer text-white'
              >
                <Select.ItemText>{label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
    );
  }
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
