export default function handler(req, res) {
  // Get data from request body
  console.log(req.body);
  const jobData = req.body.data;
  const slackMemberId = req.body.slackMemberId; // U04T8D3MVS6

  console.log(slackMemberId);

  // Get the webhook URL from the environment variables
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  // Check if Slack Member ID is missing
  if (!slackMemberId) {
    res.status(400).json({ error: 'Slack Member ID is missing' });
  }

  // Check if SLACK_WEBHOOK_URL is missing
  if (!webhookUrl) {
    res
      .status(400)
      .json({ error: 'The environment variable SLACK_WEBHOOK_URL is missing' });
  }

  console.log(webhookUrl);

  // Generates a Slack payload based on a job object
  const generateSlackPayload = (job, slackMemberId) => {
    return {
      attachments: [
        {
          color: 'blue',
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `Hi Sharpies! :wave:`,
              },
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `\n<@${slackMemberId}> is looking for a referral for the following position :`,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Name:*\n${job.job_name}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Company:*\n${job.company_name}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*City:*\n${job.city}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Department:*\n${job.department}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Department:*\n${job.seniority}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Department:*\n${job.hours}`,
                },
              ],
            },
          ],
        },
      ],
    };
  };

  // Posts a Slack payload to a webhook URL
  const postJobToSlack = (webhookUrl, payload) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    fetch(webhookUrl, options)
      .then((response) =>
        console.log(`Slack response: ${response.status} ${response.statusText}`)
      )
      .catch((error) => console.error(error));
  };

  // Generate Slack payload and post it to Slack
  const payload = generateSlackPayload(jobData, slackMemberId);

  postJobToSlack(webhookUrl, payload);

  res.status(200).json({ message: 'Referral request sent to Slack' });
}
