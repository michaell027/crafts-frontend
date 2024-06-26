import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { IoIosArrowForward } from "react-icons/io";

async function ForgotPasswordPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <div className="flex">
        <div
          className="flex flex-col h-[89vh] w-full reset-password_img_section
            items-center justify-center"
        >
          <div
            className="
                    bg-black
                    opacity-20
                    inset-0
                    z-0"
          ></div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Forgot your password?
          </h1>
          <div className="flex justify-center w-3/5 items-center mt-10 gap-28">
            <div className="w-1/2 flex-col items-center gap-11 flex">
              <div className="flex w-full gap-6 text-white h-fit items-center">
                <p>Type your email here</p>
                <IoIosArrowForward size={25} />
              </div>
              <div className="flex w-full gap-6 text-white h-fit items-center">
                <p>... and then click here</p>
                <IoIosArrowForward size={25} />
              </div>
            </div>
            <div className="w-1/2 flex gap-4 flex-col items-center">
              <input
                type="email"
                id="email"
                name="email"
                required
              />
              <button
                className="font-bold custom-button"
              >
                Reset password
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPasswordPage;
