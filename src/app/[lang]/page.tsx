import type { Locale } from "@/../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <div>
        <div className="bg-white min-h-screen dark:bg-black pt-[100px] lg:pl-[256px] lg:pr-[256px] pr-[64px] pl-[0px]">
          <div className="flex flex-col w-full justify-center items-center">
            {lang}
            {/*<Title />*/}
            {/*<Carousel />*/}
            {/*<Statistics />*/}
            <div className="flex w-full justify-center gap-12 px-8">
              <div className="h-1 dark:bg-gray-400/10 bg-black/10 w-full"></div>
              <div
                id="divider"
                className="flex justify-between items-center gap-12 transition-[gap] duration-200 ease-out"
              >
                <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-gray-400/10 border-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-gray-400/10 border-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-black/10 dark:bg-gray-400/10 border-transparent"></div>
              </div>
              <div className="h-1 dark:bg-gray-400/10 bg-black/10 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
