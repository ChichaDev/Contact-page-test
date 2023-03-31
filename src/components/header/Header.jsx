import { Navbar } from "../navbar/Navbar";

// navigation as a separate entity used by header, wrapper semantic tag
export const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  );
};
