import React from 'react'

const Stat = ({label, bg, children}) => (
  <span className='dib tc mr3'>
    <span className='dib ph2 pv1 br2 white f6 fw4' style={{background: bg, minWidth: 50}}>
      {children}
    </span>
    <label className='db pt1 v-mid charcoal-muted ttu tracked' style={{fontSize: '8px'}}>
      {label}
    </label>
  </span>
)

export default Stat
