import { createContext, useState } from "react";
const AirportsContext = createContext();

const AirportsProvider = ({ children }) => {
  const [airportsList, setAirportsList] = useState([]);

  return (
    <AirportsContext.Provider value={{ airportsList, setAirportsList }}>
      {children}
    </AirportsContext.Provider>
  );
};

export { AirportsContext, AirportsProvider };
