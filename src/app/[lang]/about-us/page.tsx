import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

async function AboutUsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <section className="p-12">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7 pr-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              {dictionary.page.about.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {dictionary.page.about.firstParagraph}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img
              src="https://damassets.autodesk.net/content/dam/autodesk/www/images/left.jpg"
              alt="mockup"
              className="rounded-lg"
            ></img>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden pr-10 lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img
              src="https://opravaobuvi-poprad.sk/wp-content/uploads/2023/05/oprava-obuvi-1.jpg"
              alt="mockup"
              className="rounded-lg"
            ></img>
          </div>
          <div className="place-self-center lg:col-span-7">
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {dictionary.page.about.secondParagraph}
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7">
            <p className="max-w-2xl pr-10 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {dictionary.page.about.thirdParagraph}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img
              src="https://lepsiden.sk/wp-content/uploads/2022/06/spokojny-700x459.jpg"
              alt="mockup"
              className="rounded-lg"
            ></img>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden pr-10 lg:mt-0 lg:col-span-6 lg:flex rounded-lg">
            <img
              src="https://img.cas.sk/cas/1280px-c2/3242391.jpg"
              alt="mockup"
              className="rounded-lg"
            ></img>
          </div>
          <div className="place-self-center lg:col-span-6">
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {dictionary.page.about.fourthParagraph}
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7">
            <p className="max-w-2xl pr-10 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {dictionary.page.about.fifthParagraph}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
            <img
              src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo"
              alt="mockup"
              className="rounded-lg"
            ></img>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
