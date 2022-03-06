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
    const [cityList, setcityList] = useState({});
    const [city, SetCity] = useState(true);

    // setLocation = "Dallas";

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=dallas&limit=5&appid=98d998b38e310106e9dc9355aeeacd48`;

    const searchLocation = (e) => {
        e.preventDefault();
        console.log("Form Enter");
        axios
            .get(url)
            .then((response) => {
                setData(response.cityList);
                console.log(response.cityList);
            })
            .catch(function (error) {
                console.log("error !");
                return Promise.reject(error);
            });
        
    };

    return (
        <>
            {city ? (
                <FormView searchLocation={searchLocation} cityList={cityList} />
            ) : (
                <CityView />
            )}
        </>
    );
}

export default App;
