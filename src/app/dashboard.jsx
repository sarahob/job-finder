"use client";
import Search from "./search";
import { useJobData } from "./hooks";
import Map from "./map";

function Dashboard() {
  const { data, isLoading, isError } = useJobData();
  if (isLoading) return "Loading...";
  if (isError) return "Something went wrong...";
  return (
    <div className="container-dashboard">
      {data && <Search data={data} />}
      {data && <Map data={data} />}
    </div>
  );
}
export default Dashboard;
