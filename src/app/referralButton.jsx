import { Input, Button, Space } from 'antd';
import { useState } from 'react';

function ReferralButton() {
  const [slackMemberId, setSlackMemberID] = useState('');
  const [data, setData] = useState({
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

  function handleChange(e) {
    setSlackMemberID(e.target.value);
  }

  function handleClick() {
    fetch('/api/sendReferralRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slackMemberId, data }),
    });
  }

  return (
    <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input placeholder="Slack Member ID" onChange={handleChange} />
      <Button type="primary" onClick={handleClick}>
        Request Referral
      </Button>
    </Space.Compact>
  );
}

export default ReferralButton;
