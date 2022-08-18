import { useQuery } from "react-query";

const limit = 30;

const fetchCountries = async (page = 0) => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);

  const results = await response.json();

  return results;
};

export const useCountries = () => {
  const { data, isLoading } = useQuery(["countries"], fetchCountries, {
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(data?.length / limit);

  const arrayAux = [];

  for (let i = 0; i < totalPages; i++) {
    let startSlice = i * limit;
    let endSlice = (i + 1) * limit;
    let dataAux = data.slice(startSlice, endSlice);
    arrayAux.push(dataAux);
  }

  console.log(data?.map((q) => q.currencies));

  return {
    countries: arrayAux || [],
    isLoading,
    totalPages,
  };
};

export const useRegions = () => {};
