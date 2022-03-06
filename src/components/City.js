import React from "react";
import styled from "styled-components";

function City({ city }) {
    return (
        <CityContainer>
            {city.name} <span>{city.state}</span>
        </CityContainer>
    );
}

export default City;

const CityContainer = styled.li`
    padding: 20px;
    font-family: "Poppins";
    span {
        font-weight: 700;
    }
`;
