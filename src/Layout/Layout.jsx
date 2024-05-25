import Head from 'next/head';
import Sidebar from '@/Components/Sidebar/Sidebar';
import styles from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>{children}</section>
      </main>
    </>
  );
};

export default Layout;