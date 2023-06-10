/**
 * This is a custom hook to fetch the jobs data
 * If we are on our local environment this will use the local json file, if we are in production it will useSWR to call the
 * SheSharp endpoint
 */

import useSWR from "swr";
import localData from "./data/jobs.json";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useJobData() {
  if (process.env.NODE_ENV === "development") {
    return {
      data: localData,
      isLoading: false,
      isError: false,
    };
  }

  const { data, error, isLoading } = useSWR(
    `https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json`,
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}

export default useJobData;
