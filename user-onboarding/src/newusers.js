import React from 'react';

export default function NewUsers({ details }){
    if (!details) {
        return <h3>Loading New User Data!! Give Us A Mintue Please</h3>
      }
    
      return (
        <div>
          <h2>Name: {details.username}</h2>
          <p>Email: {details.email}</p>
          <p>Password: {details.password}</p>
        </div>
      )
}