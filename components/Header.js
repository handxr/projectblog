import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";
import { useTheme } from "next-themes";
import { BsSun, BsMoonFill } from "react-icons/bs";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currenTheme = theme === "system" ? systemTheme : theme;
    if (currenTheme === "dark") {
      return (
        <BsSun
          className="w-7 h-7 text-yellow-500"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoonFill
          className="w-7 h-7 text-black text-blue-700"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 text-black dark:text-white ">
      <div className="border-b w-full inline-block  py-8 border-black dark:border-white">
        <div className="md:float-left flex items-center gap-20">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl ">
              Project Blog
            </span>
          </Link>
          {renderThemeChanger()}
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
