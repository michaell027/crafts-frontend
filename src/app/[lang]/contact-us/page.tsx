import { Locale } from "../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";

async function ContactUsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <div className="flex justify-center items-center w-full">
        <div className="container mx-auto my-4 px-4 lg:px-20 text-gray-700 dark:text-gray-300">
          <div className="w-full px-8 py-12 my-4 xl:w-9/12 xl:pl-20 xl:pr-40 mr-auto rounded-2xl dark:bg-gray-800/50 shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-3xl md:text-4xl lg:text-5xl">
                Contact us
              </h1>
            </div>
            <div className="grid text-gray-700 lg:grid-cols-1 grid-cols-1 gap-3 2xl:gap-5 2xl:grid-cols-2 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
            </div>
            <div className="py-3 space-y-3">
              <input
                className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="uppercase font-bold py-3 bg-green-500 dark:bg-green-800 text-gray-100 rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-900 w-full
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full xl:-mt-96 xl:w-2/6 px-6 py-6 ml-auto text-white dark:text-gray-300 bg-green-500 dark:bg-green-800 rounded-lg">
            <div className="flex flex-col w-full items-center xl:items-start">
              <h1 className="font-bold uppercase text-2xl my-3">
                Our contact info:
              </h1>
              <div className="flex my-2">
                <div className="flex flex-col items-center xl:items-start">
                  <div className="flex gap-3 items-center h-auto">
                    <FaPhoneAlt />
                    <p>Tel: xxx-xxx-xxx</p>
                  </div>
                  <div className="flex gap-3 items-center h-auto">
                    <MdMail />
                    <p className="">Email: xxx@xxx.xxx</p>
                  </div>
                  <div className="flex gap-3 items-center h-auto">
                    <HiMapPin />
                    <p className="">Address: xxx@xxx.xxx</p>
                  </div>
                </div>
              </div>

              <div className="flex my-3 space-x-3">
                <div className="h-8 w-8 rounded-full bg-white"></div>
                <div className="h-8 w-8 rounded-full bg-white items-center justify-center flex">
                  <div className="h-6 w-6 rounded-full bg-green-500 dark:bg-green-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUsPage;
