import "./Header.css";
import { Navbar } from "../navbar/Navbar";

// use of semantic tags throughout the application for SEO and accessibility,
// such as header,footer,section
export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper-header">
        <Navbar />
      </div>
    </header>
  );
};
