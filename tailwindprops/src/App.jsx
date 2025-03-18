import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
import ClassWarfare from './components/ClassWarfare';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold bg-green-500 text-white p-4 rounded-lg shadow-md">Hello world!</h1>
      <div className="mt-6 space-y-6">
        <Card user='ali'/>
        <Card user='metin'/>
        <ClassWarfare username='Mustafa' post='Developer' />
        <ClassWarfare username='Mehmet' post='Analist' />
      </div>
    </div>
  );
}

export default App;