import React from "react";
import Day from "./Day";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function Week({ data }) {
    data.daily.forEach((day) => {
        day.id = uuidv4();
    });

    console.log(data.daily[0]);

    return (
        <DaysList>
            {data.daily.map((day) => {
                return <Day data={day} key={day.id} />;
            })}
        </DaysList>
    );
}

export default Week;

const DaysList = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 72px;
    right: 100px;
`;
