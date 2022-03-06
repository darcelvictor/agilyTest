import React from "react";
import styled from "styled-components";

function City({ city, modifyCity }) {
    return (
        <CityContainer key={city.id} onClick={() => modifyCity(city)}>
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
