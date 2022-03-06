import { useState } from "react";
import FormView from "./views/FormView";
import CityView from "./views/CityView";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [cityList, setCityList] = useState([]);
    const [city, SetCity] = useState(true);

    // setLocation = "Dallas";

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=dallas&limit=5&appid=2adc5af4e8e1ddb2fe2a0640ce3fd906`;

    const searchLocation = (e) => {
        e.preventDefault();
        console.log("Form Enter");
        axios
            .get(url)
            .then((response) => {
                setCityList(response.data);
                console.log(response.data);
                const cityListId = response.data;
                cityListId.forEach((city) => {
                    city.id = uuidv4();
                });
                setCityList(cityListId);
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
