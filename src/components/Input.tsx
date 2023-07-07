import clsx from 'clsx';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import get from 'lodash.get';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  suffix?: string;
  id?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  type?: string;
}

const Input = ({
  prefix,
  suffix,
  placeholder,
  type = 'text',
  label,
  id,
  onChange,
}: Props): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMsg = get(errors, id);
  const hasError = !!errorMsg;

  return (
    <div>
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-xs md:text-sm font-medium text-neutral-600"
      >
        {label}
      </label>
      <div className="relative text-sm md:text-base max-w-xs">
        {prefix ? (
          <div className="absolute flex items-center p-3 pointer-events-none font-bold border-purple-300 bg-neutral-200 border-r rounded-l-lg inset-y-px left-px text-neutral-600">
            {prefix}
          </div>
        ) : null}

        <input
          {...register(id, { valueAsNumber: type === 'number' })}
          type={type}
          id={id}
          className={clsx(
            'border border-r border-purple-300 rounded-lg focus:border-purple-500 block w-full p-2.5 outline-none text-neutral-800',
            prefix && 'pl-14',
            suffix && 'pr-14'
          )}
          placeholder={placeholder}
          onChange={onChange}
        />
        {suffix ? (
          <div className="absolute flex items-center p-3 pointer-events-none font-bold border-purple-300 bg-neutral-200 border-l rounded-r-lg inset-y-px right-px text-neutral-600">
            {suffix}
          </div>
        ) : null}
      </div>
      {hasError && (
        <p className="text-red-600 text-xs">{errorMsg.message.toString()}</p>
      )}
    </div>
  );
};

export default Input;
