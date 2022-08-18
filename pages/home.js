import BordersFilter from "../components/BordersFilter";
import RegionsFilter from "../components/RegionsFilter";
import { Countries } from "../components/Countries";
import { useCountries } from "../hooks/useCountries";
import { useState } from "react";

export const Home = () => {
  const { countries, isLoading, totalPages } = useCountries();

  return (
    <div className="flex flex-col items-center">
      <RegionsFilter />
      <Countries
        countries={countries}
        isLoading={isLoading}
        totalPages={totalPages}
      />
    </div>
  );
};
