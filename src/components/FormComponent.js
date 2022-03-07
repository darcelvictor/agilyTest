import { useState } from "react";
import styled from "styled-components";
import search from "../img/search.svg";
import City from "./City";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function FormComponent({ modifyCity }) {
    const [cityList, setCityList] = useState([]);
    const [stateInput, setStateInput] = useState("");

    const myApi = process.env.REACT_APP_MY_API;

    const searchLocation = (e) => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${stateInput}&limit=5&appid=${myApi}`;
        e.preventDefault();
        axios
            .get(url)
            .then((response) => {
                setCityList(response.data);
                const cityListId = response.data;
                cityListId.forEach((city) => {
                    city.id = uuidv4();
                });
                setCityList(cityListId);
            })
            .catch(function (error) {
                console.log("error !");
                return Promise.reject(error);
            });
    };

    const linkedInput = (e) => {
        setStateInput(e);
    };

    const cityListNotEmpty = cityList.length > 0 ? true : false;

    return (
        <form onSubmit={(e) => searchLocation(e)}>
            <StyledInput
                type="text"
                placeholder="Search"
                onInput={(e) => linkedInput(e.target.value)}
            />
            <Img src={search} alt="" />
            {cityListNotEmpty && (
                <List>
                    {cityList.map((city) => {
                        console.log(city.id);
                        return (
                            <City
                                city={city}
                                key={city.id}
                                modifyCity={modifyCity}
                            />
                        );
                    })}
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
