import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./assets/geekie-logo.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()
  
  const handleSearch = ({ key }) => {
    if (key === "Enter")
      navigate(`/results/${searchQuery}`);
  }

  const links = [
    {
      label: "Series",
      to: "/series",
    },
    {
      label: "Movies",
      to: "/movies",
    },
  ];

  return (
    <nav className="fixed z-50 top-0 shadow-2xl grid grid-cols-4 justify-between items-center w-full bg-dark-grey p-3">
      <div className="w-40">
        <Link to="/">
          <img className="w-full" src={Logo} alt="Geekie!" />
        </Link>
      </div>

      <div className="flex flex-row col-span-2 h-10">
        <input
          className="search-input rounded-sm h-full w-full mr-2 focus:border-none"
          value={searchQuery}
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onKeyDown={e => handleSearch(e)}
          onChange={({ target }) => setSearchQuery(target.value)}
        />
        <Link
          to={`results/${searchQuery}`}
          className="p-2 h-full bg-primary text-white rounded-sm baseline font-bold"
        >
          Search
        </Link>
      </div>

      <div className="flex flex-row justify-end items-center font-bold text-white">
        <ul className="p-0 m-0 list-none flex gap-1">
          {links &&
            links.map((link) => (
              <li key={link.to}>
                <Link
                  className="no-underline flex items-center p-2"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
