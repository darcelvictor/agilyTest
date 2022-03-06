import React from "react";
import styled from "styled-components";
import search from "../img/search.svg";
import City from "./City";

function FormComponent({ searchLocation, cityList }) {
    const cityListNotEmpty = cityList.length > 0 ? true : false;

    return (
        <form onSubmit={(e) => searchLocation(e)}>
            <StyledInput type="text" placeholder="Search" />
            <Img src={search} alt="" />
            {cityListNotEmpty && (
                <List>
                    {cityList.map((city) => (
                        <City city={city} key={city.id} />
                    ))}
                </List>
            )}
        </form>
    );
}

export default FormComponent;
const List = styled.ul`
    background-color: #fff;
    width: 595px;
    margin-top: -20px;
`;

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
