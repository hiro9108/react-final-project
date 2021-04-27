import Head from 'next/head';
import { Header, Footer } from '../layout/common';

const Layout: React.FC<{ title: string }> = ({
  children,
  title = 'None Title',
}) => {
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
