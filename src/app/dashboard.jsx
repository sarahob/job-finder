'use client';

import useJobData from "./useJobData";

function Dashboard () {
    const { data, isLoading, isError } = useJobData()
   

    if (isLoading) return 'Loading...'
    if (isError) return 'Something went wrong...'
    return <div>
        {JSON.stringify(data)};
    </div>
  }

  export default Dashboard;