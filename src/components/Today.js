import React from "react";
import styled from "styled-components";

function Today() {
    const date = "Lundi 3 mars";
    const logo = "10d";
    const icon = `https://openweathermap.org/img/wn/${logo}@4x.png`;

    return (
        <TodayCard>
            <img src={icon} alt="weather icon" />
            <h1>{date}</h1>
            <Data>
                <ul>
                    <li>Jour - 26,6°C</li>
                    <li>Nuit - 17,1° C</li>
                    <li>Humidité - 34%</li>
                </ul>
                <ul>
                    <li>Pression - 1019hPa</li>
                    <li>Vent - 1,54 Km/h</li>
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
