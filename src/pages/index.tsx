import { NextPage } from 'next';
import Link from 'next/Link';
import tw from 'twin.macro';
import { css } from '@emotion/react';

import Layout from '../components/layout/Layout';

const rootStyle = css`
  ${tw`bg-gray-600 text-xl`}
  color: white;
`;

const container = css`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const main = css`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const title = css`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      color: #0070f3;
      text-decoration: none;
    }
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div css={container}>
        <main css={main}>
          <h1 css={title}>
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
