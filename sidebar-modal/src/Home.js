import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import {AppContext, useGlobalContext} from './context';

const Home = () => {
  // grap the passed value in AppContext
  // const data = useContext(AppContext);
  const data = useGlobalContext();
  console.log('data : ', data);
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>show modal</button>
    </main>
  )
}

export default Home
