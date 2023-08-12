import React from 'react'
import { useParams } from 'react-router-dom'

const ProductOpen = () => {
  const { id } = useParams()
  return (
    <div>ProductOpen {id}</div>
  )
}

export default ProductOpen