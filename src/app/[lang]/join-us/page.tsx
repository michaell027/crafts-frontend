import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import RegisterCraftsmanForm from "@/components/RegisterCraftmanForm";

async function JoinUsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <RegisterCraftsmanForm />
    </main>
  );
}

export default JoinUsPage;
