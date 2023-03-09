import React, { useEffect, useState } from 'react';
import { getEmployeeById } from '../api/api';
import { useSelector } from 'react-redux';
import Login from '../logPortal/UserLogin';
import "./AdressbuchStyle.css";

/*
const express = require('express');
const router = express.Router()
const { API_URL } = require("../constants");

//const connection = require('../../data/database/db')
const ids = () => {
  const idArray = [];
  return idArray;
}
/*
const idObject = router.get('/', (res) => {
  connection.query('SELECT id FROM employees', function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
})
*/

function Adressbuch() {
  //console.log(idObject)
  const user = useSelector((state) => state.user.user)
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    async function findContacts() {
      let fedArray = [];
      for (let index = 1; index < 30; index++) {
        try {
          let employee = await getEmployeeById(index);
          console.log("Employee is " + employee);
          if ((employee !== null) && (employee !== undefined)) {
            fedArray.push(employee);
          };
        } catch (error) {

        }
      };
      setContacts(fedArray);
    }
    if (user != null) {
      findContacts()
    }
  }, [])

  function makeContactlist() {
    return (
      <>
        {contacts.map(
          (element) => {
            return (
              <li className="contact line" key={element.id}>
                <div>
                  <div className='contact name'>{element.name}</div>
                  <div className='contact number'>{element.phone}</div>
                </div>
              </li>
            );
          }
        )
        }
      </>
    );
  }

  if (user != null) {
    return (
      <div>
        <div>Test</div>
        <div>
          <ul>
            {makeContactlist()}
          </ul>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}

export default Adressbuch
