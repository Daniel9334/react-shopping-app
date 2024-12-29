import { useContext, useEffect, useState } from "react";
import "./Airports.css";
import axios from "axios";
import { AirportsContext } from "../../context/airportsContext";
import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

const Airports = () => {
  const { airportsList, setAirportsList } = useContext(AirportsContext);
  const [airportsLoadingStatus, setAirportsLoadingStatus] = useState("initial");

  const loadAirportsListFromApi = async (url) => {
    try {
      setAirportsList([]);
      setAirportsLoadingStatus("loading");
      const airportsFromApi = await axios.get(url);
      setAirportsLoadingStatus("loaded");
      setAirportsList(airportsFromApi.data);
    } catch {
      setAirportsLoadingStatus("error");
      console.log("Wystąpił błąd podczas pobierania listy lotnisk");
    }
  };

  console.log(airportsLoadingStatus);

  const baseUrl = "http://localhost:4000";

  useEffect(() => {
    loadAirportsListFromApi(`${baseUrl}/airports/delayed-list`);
  }, []);

  return (
    <div className={"Airports"}>
      <p>
        <button
          onClick={() => loadAirportsListFromApi(`${baseUrl}/airports/list`)}
        >
          Załaduj listę lotnisk lotnisk
        </button>
      </p>
      <p>
        <button
          onClick={() =>
            loadAirportsListFromApi(`${baseUrl}/airports/delayed-list`)
          }
        >
          Załaduj listę lotnisk lotnisk - opóźnienie
        </button>
      </p>
      <p>
        <button
          onClick={() =>
            loadAirportsListFromApi(`${baseUrl}/airports/delayed-list-failed`)
          }
        >
          Załaduj listę lotnisk lotnisk - błąd
        </button>
      </p>
      {airportsLoadingStatus === "loading" ? (
        <p>
          <LinearProgress />
        </p>
      ) : (
        <ul>
          {airportsList.map((airport) => (
            <Link
              key={airport.id}
              to={`/dashboard/airport-details/${airport.id}`}
            >
              <li key={airport.id}>{airport.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Airports;
