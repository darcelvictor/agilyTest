import React from "react";
import arrow from "../img/arrow.svg";
import styled from "styled-components";

function HomeBack() {
    return (
        <>
            <MyButton>
                <img src={arrow} alt="back to home" />
            </MyButton>
        </>
    );
}

export default HomeBack;

const MyButton = styled.button`
    background-color: #134601;
    height: 80px;
    width: 80px;
    margin: 50px;
    border-radius: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;
