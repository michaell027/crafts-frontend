import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LoginForm from "@/components/LoginForm";

async function LoginPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
