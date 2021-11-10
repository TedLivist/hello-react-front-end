import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getGreeting from '../helpers/getGreeting';
import { displayGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await getGreeting();
      dispatch(displayGreeting(data));
    }
    fetchData();
  }, [dispatch]);

  const greeting = useSelector((state) => state.greetingsReducer.greeting);

  return (
    <h1>{greeting && greeting.message}</h1>
  );
};

export default Greeting;
