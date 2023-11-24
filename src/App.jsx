import { useState } from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import Contador from './components/Contador';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>

      <h1>Falta instalar redux-devtools</h1>
      <hr/>
      <Contador/>
    </Provider>
  )
}

export default App
