import React from "react";
import Day from "./Day";
import styled from "styled-components";

function Week({ dataArray }) {
    return (
        <DaysList>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
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
