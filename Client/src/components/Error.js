import React from 'react'

export default function Error(error) {
  return (
    <div>
        <div classname="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{error}</strong> 
  
</div>

    </div>
  )
}
