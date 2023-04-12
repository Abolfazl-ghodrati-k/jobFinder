import React from 'react'
import withAuth from '~/HOC/withAuth'
import withLayout from '~/HOC/withLayout'

function applications() {
  return (
    <div>applications</div>
  )
}

export default withLayout(withAuth(applications))