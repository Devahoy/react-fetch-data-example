import WithUseEffect from './components/with-use-effect'
import WithSWR from './components/with-swr'
import WithReactQuery from './components/with-react-query'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>ตัวอย่างการ Fetch Data ใน React.js</h1>

      <WithUseEffect />
      <WithSWR />
      <WithReactQuery />
    </div>
  )
}

export default App
