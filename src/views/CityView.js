import React, { useEffect, useState } from "react";
import HomeBack from "../components/HomeBack";
import Today from "../components/Today";
import Week from "../components/Week";
import axios from "axios";

function CityView({ modifyCity, city }) {
    const [data, setData] = useState([]);
    const [isNotBusy, setNotBusy] = useState(false);

    useEffect(() => {
        const myApi = process.env.REACT_APP_MY_API;

        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&lang=fr&appid=${myApi}`;

        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setNotBusy(true);
            })
            .catch(function (error) {
                console.log("error !");
                return Promise.reject(error);
            });
    }, []);

    return (
        <>
            <HomeBack modifyCity={modifyCity} />
            {isNotBusy && (
                <>
                    <Today data={data} />
                    <Week data={data} />
                </>
            )}
        </>
    );
}

export default CityView;
