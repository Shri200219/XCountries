import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountriesapi.onrender.com/all");
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    fetchCountries();
  }, []);

  const cardStyle = {
    width: "200px",
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
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.abbr} style={cardStyle}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={imgStyle}
          />
          <h2>{country.name}</h2>
        </div>
      ))}
    </div>
  );
}
