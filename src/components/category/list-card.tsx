import React from 'react';
import Link from 'next/link';

const CategoryListCard = () => {
  const dynamicChildOrder = [1, 2, 3, 4, 5, 6];
  return (
    <li className='category-card'>
      {dynamicChildOrder.map((order, index) => (
        <span className={`category-child ${index}`} key={order}>
          {index === 5 && (
            <>
              <Link
                href={`/category/web-development`}
                className='text-gray-600 font-bold text-lg'
              >
                Web Development
              </Link>
              <p className='text-gray-400'>5 articles</p>
            </>
          )}
        </span>
      ))}
    </li>
  );
};

export default CategoryListCard;
