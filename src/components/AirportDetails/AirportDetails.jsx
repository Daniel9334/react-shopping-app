import "./AirportDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AirportDetails = () => {
  const { id } = useParams();
  const [selectedAirport, setSelectedAirport] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAirport = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/airports/details/${id}`
        );
        setSelectedAirport(response.data);
      } catch (error) {
        console.log("Wystąpił błąd podczas pobierania lotniska", error);
      }
    };
    fetchAirport();
  }, [id]);

  const handleRemoveAirport = async () => {
    try {
      await axios.delete(`http://localhost:4000/airports/${id}`);
      navigate("/dashboard/airports");
    } catch (error) {
      console.log("Wystąpił błąd podczas usuwania lotniska", error);
    }
  };

  return (
    <div className={"AirportDetails"}>
      <h1>Airport details</h1>
      {selectedAirport ? (
        <div>
          <h2>Name: {selectedAirport.name}</h2>
          <p>City: {selectedAirport.city}</p>
          <p>Country: {selectedAirport.country}</p>
          <p>Iata Code: {selectedAirport.iata_code}</p>
          <button onClick={handleRemoveAirport}>Remove airport</button>
        </div>
      ) : (
        <p>Lotnisko nie zostało jeszcze załadowane</p>
      )}
    </div>
  );
};

export default AirportDetails;
