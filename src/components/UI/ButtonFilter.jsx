import React from 'react'
import { Button } from './Button'
export const ButtonFilter = () => {
  return (
    <div className='containerButtomsFilter'>
        <Button name="All"/>
        <Button name="Pending"/>
        <Button name="Completed"/>
    </div>
  )
}