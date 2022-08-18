import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function RegionsFilter() {
  return (
    <FormGroup>
      <div>
        <p>Continents</p>
        <div>
          <FormControlLabel control={<Checkbox />} label="Africa" />
          <FormControlLabel control={<Checkbox />} label="Americas" />
          <FormControlLabel control={<Checkbox />} label="Asia" />
          <FormControlLabel control={<Checkbox />} label="Europe" />
          <FormControlLabel control={<Checkbox />} label="Oceania" />
        </div>
      </div>
    </FormGroup>
  );
}
