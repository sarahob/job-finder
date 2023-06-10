## SheSharp x Reaktor Hackathon

### Goal:

Our goal was to create a map visualization showing the jobs by location and when the user searched it would also filter the map and when they select a job it shows the details with a slack integration where you can enter your slack id and ask if anyone has a referral for the job you selected.

We did not get that far but hope that you get an idea of what we were trying to achieve.

We have some styling issues we couldn't reslove in time.

## Send a Referral Request to Slack

Our app is connected to the SheSharp Slack server. If you see a job post that you're interested in you can send a request for a referral. The message goes to the `#2023-hackathon-slackbot-projects` channel where members of our community can see it and respond to it.

After pressing the "Request Referral" button you will be prompted to input your Slack Member ID. This allows the bot to tag you in the message. Your Slack Member ID can be found by following these steps:

1. Navigate to your Slack profile.
2. Click the "three dots" button on the right side of the screen.
3. Click "Copy member ID".

## Next Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
