import axios from "axios";
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL, REST_COUNTRIES_URL } from '../../../constants.ts';
import { Button } from 'react-bootstrap';

const Countries = () => {

  const [countries, setCountries] = useState<ICountry[]>([]);

    const fetchCountries = useCallback(async () => {
      const response: {data: ICountry[]} = await axios(BASE_URL + REST_COUNTRIES_URL);
      const responseCountries = response.data;

      const promises = responseCountries.map(async country => {
        return {
          name: country.name, alpha3Code: country.alpha3Code
        };

      });

      setCountries(await Promise.all(promises));
    }, []);

  useEffect(() => {
    void fetchCountries();
  }, [fetchCountries]);


  return (
    <>
      {countries.map((country) => (
        <div className='' key={country.alpha3Code}>
          <Button variant="light" className='text-start w-100 mt-1 '><b>{country.name}</b></Button>
        </div>
      ))}
    </>
  );
};

export default Countries;