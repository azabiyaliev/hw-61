import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, COUNTRY_URL} from '../../../constants.ts';
import { Col, Container, Row } from 'react-bootstrap';

interface Props {
  alpha3Code: string | null;
}

const URL_TO_GET_ONE_COUNTRY = BASE_URL + COUNTRY_URL;

const DisplayCountry: React.FC<Props> = ({alpha3Code}) => {
  const [country, setCountry] = useState<ICountryMutation | null>(null);

  useEffect(() => {
    const getCountryByAlphaCode = async () => {
      const response: {data: ICountryMutation} = await axios(URL_TO_GET_ONE_COUNTRY + alpha3Code);
      const responseCountry = response.data;
      console.log(responseCountry);
      setCountry(responseCountry);
    };
    if (alpha3Code !== null) void getCountryByAlphaCode();
  }, [alpha3Code]);

    console.log(country?.borders);

  return country && (
    <>
      <Container>
        <Row className="mt-4">
          <Col sm={8}>
            <h1>{country.name}</h1>
            <p className="mt-5"><b>Capital:</b> {country.capital}</p>
            <p><b>Population:</b> {country.population}</p>
            <p className="mt-5"><b>Borders with:</b>
            </p>
          </Col>
          <Col><img className='border border-1 border-secondary' width={200} src={country.flag} alt={country.name}/></Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayCountry;