import FormComponent from "../components/FormComponent";
import styled from "styled-components";

function FormView() {
    return (
        <Background>
            <Wrap>
                <h1>
                    The Forecast
                    <br />
                    Weather App
                </h1>
                <FormComponent />
            </Wrap>
        </Background>
    );
}

export default FormView;

const Background = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #134601;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 48px;
        background-image: linear-gradient(180deg, #00c058 0%, #e7e9a0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;
