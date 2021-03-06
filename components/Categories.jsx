import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="cardcategory bg-lightcard shadow-lg rounded-lg p-8 pb-12 mb-8 dark:border dark:border-gray-700 dark:hover:border-gray-400 dark:bg-darkcard">
      <h3 className="text-xl mb-8 font-semibold border-gray-400 border-b pb-4">Categorías</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b border-gray-600 '} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;