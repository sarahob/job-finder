import { Button } from 'antd';
import { useState } from 'react';

function ReferralButton() {
  const [data, setData] = useState();
  const [slackMemberId, setSlackMemberID] = useState();

  function handleClick() {
    setData({
      job_name: 'Technician - School of Computing and Engineering (Part-Time)',
      hours: 'Part-Time',
      department: null,
      seniority: 'IC',
      remote: null,
      company_name: 'Quinnipiac University',
      company_url: 'quinnipiac.edu',
      post_url:
        'careers.pageuppeople.com/871/ci/en-us/job/495000/technician-school-of-computing-and-engineering-parttime',
      tags_matched: ['Twitter', 'Facebook', 'Instagram'],
      tag_categories: [
        'Social Media',
        'Advertising',
        'Social Share',
        'Link Shortening',
      ],
      job_location: 'Mount Carmel - Hamden, CT',
      city: 'Hamden',
      region: 'Connecticut',
      country: 'United States',
      last_indexed: '2023-06-09 12:06:56',
    });

    const id = prompt('Please enter your Slack Member ID');
    setSlackMemberID(id);

    fetch('/api/sendReferralRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slackMemberId, data }),
    });
  }

  return (
    <>
      <Button size="large" type="primary" onClick={handleClick}>
        Request Referral
      </Button>
    </>
  );
}

export default ReferralButton;
