import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderItem from './components/HeaderItem';
import FormItem from './components/FormItem';

function App() {
  return (
    <div className='Header'>
      <HeaderItem />
      <FormItem />
    </div>
  );
}

export default App;
