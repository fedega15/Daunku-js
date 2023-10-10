// react-scroll


const NavLink = ({ children, href, offset = -50, mobileMenu = false }) => {
  const className = mobileMenu
    ? "text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center"
    : "text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent";

  return (
    <a
      href={href}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      className={className}
    >
      {children}
    </a>
  );
};

export default NavLink;