import { useState } from "react";
import FormView from "./views/FormView";
import CityView from "./views/CityView";
import axios from "axios";
import "./index.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [city, SetCity] = useState(true);

    // setLocation = "Dallas";

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=dallas&limit=5&appid=e1ccd2dc71c9bb6e6055ecae92df8c46`;

    const searchLocation = (e) => {
        e.preventDefault();
        console.log("test");
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log("error !");
                return Promise.reject(error);
            });
    };

    return (
        <>
            {city ? <FormView searchLocation={searchLocation} /> : <CityView />}
        </>
    );
}

export default App;
