import React, { useEffect } from 'react'
import { getEmployeeById } from '../api/api';
import { useSelector } from 'react-redux';
import Login from '../logPortal/UserLogin';

let contacts = [];
function findContacts() {
  let fedArray = [];
  for (let index = 0; index < 10; index++) {
    let employee = getEmployeeById(index);
    console.log(employee);
    if ((employee != null) && (employee != undefined)) {
      fedArray[index] = getEmployeeById(index);
    };
  }
  return fedArray;
}

function makeContactlist(ContactArray) {
  let contactList;
  for (let index = 0; index < ContactArray.length; index++) {
    contactList += ContactArray[index];
  }
  return contactList;
}

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
  if (useSelector((state) => state.user.user) !== null) {
    return (
      <div>
        <div>Test</div>
        <div>
          <ul>{makeContactlist(findContacts(contacts))}</ul></div>
      </div>
    );
  } else {
    return <Login />;
  }
}

export default Adressbuch
