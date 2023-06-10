import styles from "./page.module.css";

const Displayjob = () => {
  const data = [
    {
      job_name: "Technician - School of Computing and Engineering (Part-Time)",
      hours: "Part-Time",
      department: null,
      seniority: "IC",
      remote: null,
      company_name: "Quinnipiac University",
      company_url: "quinnipiac.edu",
      post_url:
        "careers.pageuppeople.com/871/ci/en-us/job/495000/technician-school-of-computing-and-engineering-parttime",
      tags_matched: ["Twitter", "Facebook", "Instagram"],
      tag_categories: [
        "Social Media",
        "Advertising",
        "Social Share",
        "Link Shortening",
      ],
      job_location: "Mount Carmel - Hamden, CT",
      city: "Hamden",
      region: "Connecticut",
      country: "United States",
      last_indexed: "2023-06-09 12:06:56",
    },
  ];
  return (
    <div className={styles.container - displayjob}>
      <div className={styles.inside - displayjob}>
        <div className={styles.title - displayjob}>
          <h2>{data[0].job_name}</h2>
        </div>
        <div className={styles.details - displayjob}>
          <h4 className={styles.location - diplayjob}>
            Location: {data[0].city}, {data[0].country}
          </h4>

          <h3 className={styles.company - displayjob}>
            Company name:
            <a href={data[0].company_url}> {data[0].company_name}</a>
          </h3>

          <h3>Seniority: {data[0].seniority}</h3>

          <div className={styles.hours - diplayjob}>
            <h3>{data[0].hours}</h3> <h3>{data[0].remote}</h3>
          </div>

          <h3 className={styles.url - displayjob}>
            <a href={data[0].post_url}>Access the job posting</a>
          </h3>

          <h3 className={styles.indexed - displayjob}>
            {data[0].last_indexed}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Displayjob;
