import { useState } from "react";
import FormView from "./views/FormView";
import CityView from "./views/CityView";

import "./index.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";

function App() {
    const [selectedCity, setSelectedCity] = useState(false);


    const modifyCity = (data) => {
        setSelectedCity(data);
    };
    return (
        <>
            {selectedCity ? (
                <CityView city={selectedCity} modifyCity={modifyCity} />
            ) : (
                <FormView modifyCity={modifyCity} />
            )}
        </>
    );
}

export default App;
