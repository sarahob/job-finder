'use client';

import Search from './search';

import useJobData from './useJobData';
import DisplayJob from './DisplayJob';

function Dashboard() {
  const { data, isLoading, isError } = useJobData();

  if (isLoading) return 'Loading...';
  if (isError) return 'Something went wrong...';
  return (
    <div className="container-dashboard">
      {data && <Search data={data} />}
      <DisplayJob />
      {JSON.stringify(data)};
    </div>
  );
}

export default Dashboard;
