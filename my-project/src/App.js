import { useEffect } from "react";
import { useState } from "react";


export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    fetchCountries();
  }, []);

  const cardStyle = {
    Width: "200px",
    border: "1px solid #ccc",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItem: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country} style={cardStyle}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={imgStyle}
          />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}ZZZ