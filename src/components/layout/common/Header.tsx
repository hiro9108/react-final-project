import Navbar from './Navbar';

const Header: React.FC<{ title: string }> = ({ title }) => {
  const isHome = title === 'Home' ? true : false;
  return (
    <header className={isHome && 'h-screen bg-header-image bg-center bg-cover'}>
      <Navbar isHome={isHome} />
    </header>
  );
};

export default Header;
