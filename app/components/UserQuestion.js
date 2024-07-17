import Styles from '@app/styles/Component.module.css';
import Title from 'antd/lib/typography/Title';

export default function UserQuestion({ question }) {
  return (
    <div className={Styles.div}>
      <Title className={Styles.user_question}>{question}</Title>
    </div>
  );
}
