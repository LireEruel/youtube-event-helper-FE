import { Button, Space, Typography } from 'antd';
import Image from 'next/image'
const { Title, Paragraph, Text, Link } = Typography;
import styles from '../styles/main.module.css'

export default function Home() {
  const onChange = () => {};
  return (
    <div  className={styles.container}>
        <div className={styles.text_wrap}>
            <h1  className={styles.title} >Managing youtube events has never been easier</h1>
            <p>You can manage your YouTube event more easily and conveniently.</p>
            <Button className={styles.start_btn} type='primary' size='large'> Get started</Button>
        </div>
          <Image src="/../public/imgs/party_with_present_and_pretty_girl.png" height={500} width={500} alt="party_with_present_and_pretty_girl"/>
    </div>
  );
}

