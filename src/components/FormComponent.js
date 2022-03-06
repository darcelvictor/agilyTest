import React from "react";
import styled from "styled-components";
import search from "../img/search.svg";

function FormComponent({ searchLocation }) {
    return (
        <form onSubmit={(e) => searchLocation(e)}>
            <StyledInput type="text" placeholder="Search" />
            <Img src={search} alt="" />
        </form>
    );
}

export default FormComponent;

const StyledInput = styled.input`
    width: 595px;
    height: 63px;
    background: #ffffff;
    border-radius: 20px;
    border: none;
    font-family: "Poppins";
    color: #134601;
    font-size: 17px;
    font-style: normal;
    margin-top: 65px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    ::placeholder {
        font-family: "Poppins";
        color: #134601;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0px;
        text-align: left;
        padding-top: 20px;
        padding-left: 22px;
    }
`;

const Img = styled.img`
    position: relative;
    top: 12px;
    right: 53px;
`;
