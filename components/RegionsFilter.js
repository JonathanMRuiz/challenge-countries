import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useQuery } from "react-query";
import { useCountries } from "../hooks/useCountries";

export default function RegionsFilter() {
  const [region, setRegion] = useState("");

  const handleCheckbox = (e) => {
    setRegion(e.target.value);
  };

  console.log(countries.flat().filter((q) => q.region === region));

  return (
    <FormGroup>
      <div>
        <p>Continents</p>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label="Africa"
            value="Africa"
            onChange={handleCheckbox}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Americas"
            value="Americas"
            onChange={handleCheckbox}
          />
          <FormControlLabel control={<Checkbox />} label="Asia" value="Asia" />
          <FormControlLabel
            control={<Checkbox />}
            label="Europe"
            value="Europe"
            onChange={handleCheckbox}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Oceania"
            value="Oceania"
            onChange={handleCheckbox}
          />
        </div>
      </div>
    </FormGroup>
  );
}
