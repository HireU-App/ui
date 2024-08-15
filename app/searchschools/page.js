import GridStyles from '@app/styles/Grid.module.css';
import Styles from '@app/styles/Search-Schools.module.css';
import Title from 'antd/lib/typography/Title';
import InputSearch from '@app/components/InputSearch';
import SignUpNav from '@app/components/SignUpNav';

export const metadata = {
  title: 'Search Schools',
};

export default function SearchSchools() {
  return (
    <div className={Styles.body}>
      <div className={Styles.container}>
        <SignUpNav />
        <Title className={Styles.user_question}>
          Which school do you attend?
        </Title>
        <InputSearch placeholder={'Search for your school'}></InputSearch>
        <br></br>
        <div className={GridStyles.flex}>
          <div className={GridStyles.largeCard}>Option 1</div>
          <div className={GridStyles.largeCard}>Option 2</div>
          <div className={GridStyles.largeCard}>Option 3</div>
          <div className={GridStyles.largeCard}>Option 4</div>
          <div className={GridStyles.largeCard}>Option 5</div>
          <div className={GridStyles.largeCard}>Option 6</div>
          <div className={GridStyles.largeCard}>Option 7</div>
          <div className={GridStyles.largeCard}>Option 8</div>
          <div className={GridStyles.largeCard}>Option 9</div>
          <div className={GridStyles.largeCard}>Option 10</div>
          <div className={GridStyles.largeCard}>Option 11</div>
          <div className={GridStyles.largeCard}>Option 12</div>
        </div>
      </div>
    </div>
  );
}
