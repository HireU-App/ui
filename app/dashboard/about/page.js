import { Image } from 'antd';
import Styles from '@app/styles/Page.module.css';

export default function About() {
  return (
    <>
      <h1 className={Styles.p}>This is the about page</h1>
      <Image
        className={Styles.p}
        width={200}
        src="https://plus.unsplash.com/premium_vector-1682298611076-a3a4ffe57584?bg=FFFFFF&q=80&w=2782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <p className={Styles.p}>
        Hire U is a Web App that connects university students who have freelance
        skills with people looking for help. Do you need assistance moving, a
        tutor, or someone to simply manage your clubs’ social media? Well, look
        no further to Hire U. We will connect you with a skilled student in your
        own campus. You no longer have to design and print flyers; on this web
        app, we match your skills to your target audience.
      </p>
    </>
  );
}
