import Styles from '@app/styles/landing.module.css';
import Text from 'antd/lib/typography/Text';
import { Image } from 'antd';

export default function Home() {
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <h1 className={Styles.mg20}>HireU: Student Skills at Your Service</h1>
        <Image
          className={Styles.mg20}
          width={200}
          src="https://plus.unsplash.com/premium_vector-1682298611076-a3a4ffe57584?bg=FFFFFF&q=80&w=2782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image about university life from unsplash"
        ></Image>
        <Text className={Styles.mg20}>
          Hire U is a Web App that connects university students who have
          freelance skills with people looking for help. Do you need assistance
          moving, a tutor, or someone to simply manage your clubs social media?
          Well, look no further to Hire U. We will connect you with a skilled
          student in your own campus. You no longer have to design and print
          flyers; on this web app, we match your skills to your target audience.
        </Text>
      </div>
    </div>
  );
}
