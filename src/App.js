import { useState } from "react";
import FormView from "./views/FormView";
import CityView from "./views/CityView";

import "./index.css";
import "@fontsource/poppins/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [city, SetCity] = useState(true);

    return <>{city ? <FormView /> : <CityView />}</>;
}

export default App;
