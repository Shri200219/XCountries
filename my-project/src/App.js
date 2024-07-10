import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
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
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
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
  const textCenter = {
    textAlign:"center"
  }

  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div key={country.abbr} style={cardStyle}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={imageStyle}
          />
          <h2 style={textCenter}>{country.name}</h2>
        </div>
      ))}
    </div>
  );
}
