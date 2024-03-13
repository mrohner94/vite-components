import { Suspense, useState } from 'react';
import './App.css';
import { lazy } from 'react';

const Button = lazy(() => import('femds/button'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense>
      <Button>Hello</Button>
    </Suspense>
  );
}

export default App;
