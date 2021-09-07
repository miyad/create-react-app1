import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Test from './Components/Test';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      Hello world from miyad!
      Lets make a second check!
      <Test/>
    </main>
  );
}

export default App;
