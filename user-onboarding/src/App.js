import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Forms from './Form';
import NewUsers from './newusers';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
};
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
};
const initialUsers = [];
const initialDisabled = true;

const API_URL = 'https://reqres.in/api/users';


function App() {

  const [users, setUsers] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {

    axios
    .get(API_URL)
    .then(res => {
      const usersFromApi = res.data
      setFriends(usersFromApi)
    })
    .catch(err => console.log(err))
  };

  const postNewUser = newUser => {

    axios.post(API_URL, newUser)
    .then((res) => {

    setUsers([...users, newUser])
    })
    .catch(err => console.log(err))
    .finally(() => {
      setFormValues(initialFormValues)
    })
  };

  const inputChange = (name, value) => {

    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: "" })
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.message})
    })


    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const formSubmit = () => {
    console.log('Submiting the new user form!!')
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.trim(),
    };
    postNewFriend(newUser);
  };

  useEffect(() => {
    getUsers()
  }, []);

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <div>

      <Forms
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <NewUsers key={user.id} details={user} />
          )
        })
      }
    </div>


    </div>
  );
}

export default App;
