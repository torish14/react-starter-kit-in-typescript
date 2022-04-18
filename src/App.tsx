import React from 'react'

interface AppProps {
  message: string
}

// 関数の宣言
const App = ({ message }: AppProps) => {
  return <div>{message}</div>
}

export default App
