interface ICountry {
  name: string;
  alpha3Code: string;
}

interface ICountryMutation {
  name: string;
  alpha3Code: string;
  capital: string;
  population: number | string;
  flag: string;
  borders:string [];
}

