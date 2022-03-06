import React from "react";
import styled from "styled-components";
import { useState } from "react";

function City({ city }) {
    const [selectedCity, setSelectedCity] = useState();

    const handleClick = (city) => {
        console.log(city);
    };

    return (
        <CityContainer key={city.id} onClick={() => handleClick(city)}>
            {city.name} <span>{city.state}</span>
        </CityContainer>
    );
}

export default City;

const CityContainer = styled.button`
    border: none;
    width: 100%;
    background-color: white;
    padding: 20px;
    font-family: "Poppins";
    span {
        font-weight: 700;
    }
`;
