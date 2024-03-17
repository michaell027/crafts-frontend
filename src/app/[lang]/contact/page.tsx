import { Locale } from "../../../../i18n.config";

export async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <h1>Contact Us</h1>
    </main>
  );
}

export default Contact;
