import React, { Fragment } from 'react'
import spinner from '../../assets/spinner.gif'

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='Loading...' style={local} />
  </Fragment>
)

const local = { width: '200px', margin: 'auto', display: 'block' }

export default Spinner
