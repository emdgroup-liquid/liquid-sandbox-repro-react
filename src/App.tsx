import {
  LdButton,
} from '@emdgroup-liquid/liquid/dist/react'
import * as React from 'react'

const App: React.FC = () => {
  const [clickCount, setClickCount] = React.useState<number>(0)

  return (
    <LdButton onClick={() => setClickCount(clickCount + 1)}>
      Click {clickCount || ' me'}
    </LdButton>
  )
}

export default App
