import React from 'react'
import UserCard from './UserCard.jsx'
const App = () => {
  return (
    <div>
      <h1>user cards</h1>
      <UserCard name="kebede debebe" email="kebede@example.com" age={25}  />
      <UserCard name="chaltu chala" email="chala@example.com" age={30}  />
      <UserCard name="tsega tsega" email="tsega@example.com" age={35 } />
      
    </div>
  )
}
export default App
