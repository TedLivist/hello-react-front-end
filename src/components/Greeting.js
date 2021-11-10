import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGreeting } from '../helpers/getGreeting';
import { displayGreeting } from '../redux/greetings/greetings';


const Greeting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const data = await getGreeting()
      dispatch(displayGreeting(data))
    }
    fetchData()
  }, [dispatch])

  return (
    <h1>I am Greeting</h1>
  );
}
 
export default Greeting;