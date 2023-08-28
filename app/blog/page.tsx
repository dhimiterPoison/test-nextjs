import Image from 'next/image';
import React from 'react';
import BlogMainCover from '../../public/blog-main-cover.jpg';

const BlogHomePage = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='flex h-52 relative'>
                <Image
                    src={BlogMainCover}
                    alt='Cover image representing a forest'
                    className='w-full h-full object-cover cover-image-gradient'
                />
                <div className='absolute bottom-4 flex w-full justify-center text-3xl font-semibold'>
                    Giorgio Blog
                </div>
            </div>
            <div className='flex flex-col md:flex-row py-8'>
                <div className='md:w-1/2'></div>
                <div className='md:w-1/2'>
                    <article className='prose lg:prose-lg px-8 dark:prose-invert'>
                        <h1>
                            Garlic bread with cheese: What the science tells us
                        </h1>
                        <p>
                            For years parents have espoused the health benefits
                            of eating garlic bread with cheese to their
                            children, with the food earning such an iconic
                            status in our culture that kids will often dress up
                            as warm, cheesy loaf for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogHomePage;
