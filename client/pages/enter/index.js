import { useState, useEffect, useContext } from 'react';
import { userContext } from '../../lib/context'; 
export default function Page({children}) {
const { user, username } = useContext(userContext);
  
  return (
    <div>
      <form action="">
        <label htmlFor="">Please Enter your username</label>
        <input type="text" placeholder="Username"/>
        <button>Take Survey</button>
      </form>
    </div>
  );
}
