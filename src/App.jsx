import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 
  const [ users, setUsers ] = useState( [] )
  const [ userSelected, setUserSelected ] = useState( null )


  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))

  }

  const selectUser = user => {
    setUserSelected( user )
  }

  const deselect = () => setUserSelected( null )

  const deleteUser = (userID) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userID}/`)
     .then(()=>getUsers())
  }
  

  return (
    <div className="App">
      <UserForm getUsers={getUsers} userSelected={userSelected} deselect={deselect} />
      <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />
    </div>
  )
}

export default App
