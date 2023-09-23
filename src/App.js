import React from 'react';
import './App.css';
import UserList from './UserList'; // Importez le composant UserList

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon Application React</h1>
        <UserList /> {/* Ajoutez le composant UserList ici */}
      </header>
    </div>
  );
}

export default App;
