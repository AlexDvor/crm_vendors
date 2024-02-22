'use client';

import { Field, FieldAttributes } from 'formik';
import React, { FC } from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Pick<FieldAttributes<string>, 'as'> {
  label?: string;
}
const InputField: FC<InputFieldProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base">
          {label}
        </label>
      )}

      <Field
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow "
      ></Field>
    </div>
  );
};

export default InputField;
