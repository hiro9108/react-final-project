import Navbar from './Navbar';

interface HeaderTitle {
  title: string;
}

const Header: React.FC<HeaderTitle> = ({ title }) => {
  const isHome = title === 'Home' ? true : false;
  return (
    <header className={isHome && 'h-screen bg-header-image bg-center bg-cover'}>
      <Navbar isHome={isHome} />
    </header>
  );
};

export default Header;
