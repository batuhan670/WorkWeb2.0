import React, { useEffect, useState } from 'react'
import { getEmployeeById } from '../api/api';
import { useSelector } from 'react-redux';
import Login from '../logPortal/UserLogin';



/*
useEffect(() => {
  const load = async () => {
      try {
          const manager = await getEmployeeById(user.payload.manager_IDemployees);
          dispatch(setManager(manager))
      } catch (err) {
          console.log(err);
      }
  }
  if (!user.payload.manager) {
      load()
  }
}, [user])
*/

function Adressbuch() {

  const user = useSelector((state) => state.user.user)
  const [contacts, setContacts] = useState([])
  const trial = ["Günther", "Klaus", "Kleber"]
  useEffect(() => {
    async function findContacts() {
      let fedArray = [];
      for (let index = 1; index < 3; index++) {
        let employee = await getEmployeeById(index);
        console.log("Employee is " + employee);
        if ((employee !== null) && (employee !== undefined)) {
          fedArray.push(employee);
        };
      };
      setContacts(fedArray);
    }
    if (user != null) {
      findContacts()
    }
  }, [])

  function makeContactlist() {
    return (
      <div>
        {contacts.map(
          (element) => {
            return <li key={element.id}>{element.name}</li>;
          }
        )}
      </div>
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
