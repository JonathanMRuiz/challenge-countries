import { useQuery } from "react-query";

export const useRegion = () => {
  const { isLoading, data } = useQuery(["region", "asia"], async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );

    const results = await response.json();
    return results;
  });

  return { region: data || [], isLoading };
};
