import { Pagination } from "@mui/material";
import { useState } from "react";
import { useCountries } from "../hooks/useCountries";
import { Country } from "./Country";

export const Countries = () => {
  const [page, setPage] = useState(0);
  const { countries, isLoading, totalPages } = useCountries();

  const currentCountriesPage = countries[page] || [];

  return (
    <div className=" flex flex-col items-center justify-center">
      <Pagination
        count={totalPages}
        page={page + 1}
        onChange={(_, value) => setPage(value - 1)}
      />
      <div className="flex flex-wrap justify-center ">
        {isLoading ? (
          <p>Esta Cargando</p>
        ) : (
          currentCountriesPage.map((country, i) => (
            <div>
              <Country
                id={country.population + i}
                name={country.name.common}
                flag={country.flag}
                population={country.population}
              />
            </div>
          ))
        )}
      </div>
      <Pagination
        count={totalPages}
        page={page + 1}
        onChange={(_, value) => setPage(value - 1)}
      />
    </div>
  );
};
