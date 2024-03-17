"use client";
import React, { useEffect, useState } from "react";
import { useDictionary } from "@/providers/dictionary-provider";
import { Category } from "@/models/Category";
import getCategories from "@/services/categories-service";
import { getLocaleFunction } from "@/utils/getLocaleFunction";
import { usePathname } from "next/navigation";

const AnimatedWords = ({ words }: { words: string[] }) => {
  const animationDuration = words.length * 1.4;

  return (
    <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-10 overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className={`animate-word animate-word-delay-${index} col-span-full row-span-full`}
          style={{
            animationDuration: `${animationDuration}s`,
            animationDelay: `-${index * 1.4}s`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

const RotateText = () => {
  const dictionary = useDictionary();
  const [services, setServices] = useState<string[]>([]);
  const locale: string = getLocaleFunction(usePathname())();

  useEffect(() => {
    getCategories().then((data) =>
      setServices(
        data.map((category: Category) => {
          if (locale === "en") {
            return category.name;
          } else {
            return category.skName;
          }
        }),
      ),
    );
  }, []);

  return (
    <div className="flex items-center justify-center font-bold text-white pb-10">
      <div className="text-center space-y-12">
        <div className="text-center text-2xl font-bold flex flex-col sm:flex-row sm:space-x-4">
          <span>{dictionary.component.home.services}</span>
          <span className="">
            <AnimatedWords words={services} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RotateText;
