import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spreado</title>
        <meta name="description" content="Spreado, the easiest way to share states and data across multiple components!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Spreado
        </h1>
      </main>
    </div>
  );
};

export default Home;
