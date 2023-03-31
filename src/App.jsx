import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Contact } from "./components/contact/Contact";

// Separation into components that are reused throughout the application,
// such as the header and footer, between them the application routing will be built
// Application layout implemented under Laptop Medium size and Mobile S,M,L
// Based on the library material ui, partially applied native css
// Imports are grouped and separated,
// styles are grouped in separate files,
// the structure is divided into components for scaling and support
// The internal structure is divided into folders as this is a real big project
function App() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
