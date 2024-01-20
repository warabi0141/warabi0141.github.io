import Image from 'next/image';
import { Header } from './_components/Header/Header';
import styles from './toppage.module.css';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div>
        <p className={styles.mainText}>Information is ...</p>
      </div>
    </main>
  )
}
