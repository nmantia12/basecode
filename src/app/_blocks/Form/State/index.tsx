import React from 'react'
import { Control, Controller, FieldErrorsImpl, FieldValues } from 'react-hook-form'
import ReactSelect from 'react-select'
import { StateField } from '@payloadcms/plugin-form-builder/dist/types'

import { Error } from '../Error'
import { Width } from '../Width'
import { stateOptions } from './options'

import classes from './index.module.scss'

export const State: React.FC<
  StateField & {
    control: Control<FieldValues, any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  }
> = ({ name, label, width, control, required, errors }) => {
  return (
    <Width width={width}>
      <div className={classes.select}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <Controller
          control={control}
          rules={{ required }}
          name={name}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <ReactSelect
              instanceId={name}
              options={stateOptions}
              value={stateOptions.find(t => t.value === value)}
              onChange={val => onChange(val.value)}
              className={classes.reactSelect}
              classNamePrefix="rs"
              id={name}
            />
          )}
        />
        {required && errors[name] && <Error />}
      </div>
    </Width>
  )
}
