import React from 'react';

export const CategoriesArray = ({ categories }) => {
    return (
        <section className="flex flex-nowrap overflow-x-scroll gap-3 h-20 mt-2">
            {categories?.length > 0 ? (
                categories.map((category, index) => (
                    <span key={index} className="category-badge">
                        <span
                            className={`${category.name} w-6 h-6 inline-block rounded-md`}
                        />
                        <span>{category.name}</span>
                        <span>{category.value}</span>
                    </span>
                ))
            ) : (
                <></>
            )}
        </section>
    );
};
