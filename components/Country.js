import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const Country = ({ name, flag, population }) => {
  return (
    <div className="p-3">
      <Card sx={{ minWidth: 200 }}>
        <div className="flex flex-col items-center">
          <Typography sx={{ fontSize: 150 }}>{flag}</Typography>
          <Typography sx={{ fontSize: 14 }}>{name}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Poblacion: {population}
          </Typography>
        </div>
      </Card>
    </div>
  );
};
