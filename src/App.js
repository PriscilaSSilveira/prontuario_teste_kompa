import './App.css';
import React from 'react'
// import PostForm from './PostForm';
import { FormContextProvider } from './hooks/FormContext';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <FormContextProvider>
        <Routes />
      </FormContextProvider>

    </div>
      </header>
    </div>
  );
}

export default App;
