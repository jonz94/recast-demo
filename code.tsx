//  code.tsx
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [modal2Value, setModal2Value] = useState('abc')
  const selectedData: [
    { label: string; value: string | number },
    { label: string; value: string | number },
  ] = [
    { label: 'xx', value: 123 },
    { label: 'zz', value: '234' },
  ]
  useEffect(() => {
    setModal2Value(selectedData[0].value as string) // this code throw error
  }, [])
  return <h1>{modal2Value}</h1>
}

export default Home
