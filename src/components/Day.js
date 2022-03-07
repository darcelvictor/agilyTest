import React from "react";
import styled from "styled-components";
import { getDayName, getMonthName, temp } from "../helper";

function Day({ data }) {
    const logo = data.weather[0].icon;
    const icon = `https://openweathermap.org/img/wn/${logo}@4x.png`;

    return (
        <DayCard>
            <img src={icon} alt="weather icon" />
            <div>
                <h2>{getDayName(data.dt)}</h2>
                <p>{getMonthName(data.dt)}</p>
            </div>
            <Temp>{temp(data.feels_like.day)}c°</Temp>
        </DayCard>
    );
}

export default Day;

const DayCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    width: 420px;
    height: 100px;
    left: 920px;
    top: 72px;
    background: #134601;
    border-radius: 25px;
    font-family: "Poppins";
    color: #fff;
    margin-bottom: 30px;
    img {
        height: 100px;
        width: 100px;
    }
    div {
        text-align: center;
        h2 {
            line-height: 54px;
            font-size: 36px;
            font-weight: 700;
        }
        p {
            text-align: center;
            line-height: 27px;
            font-size: 18px;
            font-weight: 400;
        }
    }
`;

const Temp = styled.p`
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px;
    letter-spacing: 0px;
    text-align: left;
`;
