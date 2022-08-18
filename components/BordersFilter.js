import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function BordersFilter() {
  return (
    <FormGroup>
      <p>Borders</p>
      <FormControlLabel control={<Checkbox />} label="Asia" />
    </FormGroup>
  );
}
