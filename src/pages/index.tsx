import { NextPage } from 'next';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';
import tw from 'twin.macro';
import { css } from '@emotion/react';

import Layout from '../components/layout/Layout';

const rootStyle = css`
  ${tw`bg-gray-600`}
  color: white;
`;
const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Move to{' '}
            <Link href="/demo">
              <a>App!</a>
            </Link>
            <p css={rootStyle}>Home Page</p>
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
