import { Input, Button, Space } from "antd";
import { useState } from "react";

function ReferralButton({ data }) {
  const [slackMemberId, setSlackMemberID] = useState("");

  function handleChange(e) {
    setSlackMemberID(e.target.value);
  }

  function handleClick() {
    fetch("/api/sendReferralRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slackMemberId, data }),
    });
  }

  return (
    <Space.Compact>
      <Input placeholder="Slack Member ID" onChange={handleChange} />
      <Button type="primary" onClick={handleClick}>
        Request Referral
      </Button>
    </Space.Compact>
  );
}

export default ReferralButton;
