import React from "react";
import styled from "styled-components";

function Today({data}) {
    const date = "Lundi 3 mars";
    const logo = data.daily[0].weather[0].icon;
    const icon = `https://openweathermap.org/img/wn/${logo}@4x.png`;

    // const temp = data.daily[0].temp;

    return (
        <TodayCard>
            <img src={icon} alt="weather icon" />
            <h1>{date}</h1>
            <Data>
                <ul>
                    {/* <li>Jour - {data.main.temp}</li> */}
                    <li>Nuit - ° C</li>
                    <li>Humidité - {data.daily[0].humidity} %</li>
                </ul>
                <ul>
                    <li>Pression - {data.daily[0].pressure} Pa</li>
                    <li>Vent - {data.daily[0].wind_speed} Km/h</li>
                </ul>
            </Data>
        </TodayCard>
    );
}

export default Today;

const TodayCard = styled.div`
    position: absolute;
    width: 550px;
    height: 281.34px;
    left: 50px;
    bottom: 0;
    border-radius: 25px 25px 0px 0px;
    background: rgba(19, 70, 1, 0.8);
    h1 {
        font-family: "poppins";
        font-weight: 700;
        text-align: center;
        font-size: 36px;
        line-height: 54px;
        margin-top: 26px;
        color: #fff;
    }
    img {
        position: absolute;
        height: 100px;
        width: 100px;
        top: 3px;
        left: 21px;
    }
`;

const Data = styled.div`
    display: flex;
    margin-top: 43px;
    padding-left: 5px;
    ul {
        font-family: "Poppins";
        line-height: 27px;
        font-weight: 700;
        font-size: 18px;
        color: #ffffff;
        width: 190px;
        margin-left: 40px;
    }
`;
