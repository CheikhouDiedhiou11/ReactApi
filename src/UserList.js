import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Importez le fichier CSS ici

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Effectuer une requête GET à l'API jsonplaceholder pour obtenir la liste des utilisateurs
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois lors du montage du composant

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
