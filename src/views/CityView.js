import React, { useEffect, useState } from "react";
import HomeBack from "../components/HomeBack";
import Today from "../components/Today";
import Week from "../components/Week";
import axios from "axios";

function CityView({ modifyCity, city }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&lang=fr&appid=2adc5af4e8e1ddb2fe2a0640ce3fd906`;

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
    }, []);

    return (
        <>
            <HomeBack modifyCity={modifyCity} />
            <Today data={data} />
            <Week data={data} />
        </>
    );
}

export default CityView;
