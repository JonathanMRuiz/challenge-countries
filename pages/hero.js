import BordersFilter from "../components/BordersFilter";
import RegionsFilter from "../components/RegionsFilter";
import { Countries } from "../components/Countries";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <RegionsFilter />

      <Countries />
    </div>
  );
};
