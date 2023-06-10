/**
 * This is a custom hook to fetch the jobs data
 * If we are on our local environment this will use the local json file, if we are in production it will useSWR to call the
 * SheSharp endpoint
 */

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useJobData() {
  const { data, error, isLoading } = useSWR(`/jobs`, fetcher);

  return {
    data: data?.data,
    isLoading,
    isError: error,
  };
}

export default useJobData;
