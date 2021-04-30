const Footer: React.FC = () => {
  return (
    <footer className="h-16 bg-gray-200 flex justify-center items-center">
      <small>&copy; {new Date().getFullYear()} Managemant Issues</small>
    </footer>
  );
};

export default Footer;
