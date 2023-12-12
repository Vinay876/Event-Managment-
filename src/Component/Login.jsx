import React, { useState } from 'react';
import { users } from '../data';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  function setData(input, type) {
    if (type == 'username') setUsername(input);
    if (type == 'password') setPassword(input);
    if (type == 'role') setRole(input);
  }

  function CheckName() {
    if (username.length <= 0 || password.length <= 0) {
      alert('Enter Correct Details');
    } else {
      // window.location.href = '/';
      // return;
    }

    let currentUser = users.filter((a) => {
      return a.username == username && a.pass == password;
    })[0];

    if (currentUser.role === 'user') {
      localStorage.setItem('user', currentUser);
      window.location.href = '/user-page';
    } else if (currentUser.role === 'vendor') {
      localStorage.setItem('user', currentUser);
      window.location.href = '/vendor-page';
    } else {
      window.location.href = '/login-failed';
      return;
    }
  }
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
        }}
      >
        <div
          style={{
            border: '1px solid black',
            borderRadius: '5px',
            width: '80%',
            height: '80%',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>EVENT MANAGEMENT SYSTEM</h1>
          {/* username */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '50px',
            }}
          >
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              onChange={(e) => setData(e.target.value, 'username')}
              name="username"
            />
          </div>
          {/* password */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '25px',
            }}
          >
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              onChange={(e) => setData(e.target.value, 'password')}
              name="password"
            />
          </div>
          {/* <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '25px',
            }}
          >
            <label htmlFor="role">Login USER OR VENDOR:</label>
            <input
              type="text"
              onChange={(e) => setData(e.target.value, 'role')}
              name="role"
            />
          </div> */}
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <button
              type="submit"
              onClick={CheckName}
              style={{ padding: '5px', marginTop: '10px' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
