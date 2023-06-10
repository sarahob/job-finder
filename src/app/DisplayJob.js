import styles from "./page.module.css";
import { Card } from "antd";
import ReferralButton from "./referralButton";

const DisplayJob = ({ data }) => {
  return (
    <>
      <Card style={{ width: 300 }}>
        <div className={styles.containerdisplayjob}>
          <div className={styles.insidedisplayjob}>
            <div className={styles.titledisplayjob}>
              <h2>{data.job_name}</h2>
            </div>
            <div className={styles.detailsdisplayjob}>
              <h4 className={styles.locationdiplayjob}>
                Location: {data.city}, {data.country}
              </h4>

              <h3 className={styles.companydisplayjob}>
                Company name:
                <a href={data.company_url}> {data.company_name}</a>
              </h3>

              <h3>Seniority: {data.seniority}</h3>

              <div className={styles.hoursdiplayjob}>
                <h3>{data.hours}</h3> <h3>{data.remote}</h3>
              </div>

              <h3 className={styles.urldisplayjob}>
                <a href={data.post_url}>Access the job posting</a>
              </h3>

              <h3 className={styles.indexeddisplayjob}>{data.last_indexed}</h3>
            </div>
          </div>
        </div>
      </Card>
      <ReferralButton data={data} />
    </>
  );
};

export default DisplayJob;
