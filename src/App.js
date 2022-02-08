import axios from 'axios';
import { useState, useEffect } from 'react';

import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ALL_COUNTRIES } from './config';

function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect(() => {
    axios.get(`https://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY}`)
         .then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
