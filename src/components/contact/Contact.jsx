import { ContactTitle } from "../contactTitle/ContactTitle";
import { ContactBlock } from "../contactBlock/ContactBlock";

// content is broken down into components and wrapped in a semantic tag <main>
export const Contact = () => {
  return (
    <main>
      <ContactTitle />
      <ContactBlock />
    </main>
  );
};
