import Navbar from './Navbar';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <Navbar isHome={title === 'Home' ? true : false} />
    </header>
  );
};

export default Header;
