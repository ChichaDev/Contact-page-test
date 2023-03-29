import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Contact } from "./components/contact/Contact";

// separation into components that are reused throughout the application,
// such as the header and footer, between them the application routing will be built
// application layout implemented under Laptop L and Mobile S,M,L
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
