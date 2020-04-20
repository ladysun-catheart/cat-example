import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-bootstrap/Spinner'

function Loading() {
  return (
    <div style={{ zIndex: '100', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner></div>
    </div>
  )
}

export default Loading

