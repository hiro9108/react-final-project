import Head from 'next/head';
import { Header, Footer } from '../layout/common';

interface Title {
  title: string;
}

const Layout: React.FC<Title> = ({ children, title = 'None Title' }) => {
  return (
    <div className="font-primary bg-primary text-primary">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
