import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displayGreeting } from '../redux/greetings/greetings';


const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(displayGreeting("id"))
  }, [dispatch])
  return (
    <h1>I am Greeting</h1>
  );
}
 
export default Greeting;