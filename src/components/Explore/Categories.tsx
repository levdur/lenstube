import React from "react";
import { BsBrush } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import {
  FcElectronics,
  FcGraduationCap,
  FcMusic,
  FcNews,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { GiMailShirt } from "react-icons/gi";
import { MdOutlineSportsHandball } from "react-icons/md";

import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Technology", icon: <FcElectronics className="md:text-4xl" /> },
  { name: "Music", icon: <FcMusic className="md:text-4xl" /> },
  { name: "Movies", icon: <FcVideoProjector className="md:text-4xl" /> },
  { name: "Games", icon: <CgGames className="text-purple-500 md:text-4xl" /> },
  { name: "News", icon: <FcNews className="md:text-4xl" /> },
  { name: "Learning", icon: <FcReadingEbook className="md:text-4xl" /> },
  {
    name: "Education",
    icon: <FcGraduationCap className="md:text-4xl" />,
  },
  {
    name: "Sports",
    icon: <MdOutlineSportsHandball className="text-orange-500 md:text-4xl" />,
  },
  { name: "Beauty", icon: <BsBrush className="text-pink-500 md:text-4xl" /> },
  {
    name: "Fashion",
    icon: <GiMailShirt className="text-cyan-500 md:text-4xl" />,
  },
];

const Categories = () => {
  return (
    <div className="grid gap-5 my-1 sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-5">
      {categories.map((c, idx) => (
        <CategoryItem category={c} key={idx} />
      ))}
    </div>
  );
};

export default Categories;
