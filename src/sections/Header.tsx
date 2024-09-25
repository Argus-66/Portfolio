export const Header = () => {
  return (
    <div className="fixed top-0 w-full z-20">
      {/* Full-width blurred background */}
      <div className="absolute w-full h-16 bg-[#030014] backdrop-blur-md" />
      
      {/* Centered navigation menu */}
      <div className="relative flex justify-center items-center h-16">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Projects</a>
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </div>
  );
};
