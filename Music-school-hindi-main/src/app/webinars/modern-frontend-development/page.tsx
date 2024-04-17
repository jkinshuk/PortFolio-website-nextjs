import React from 'react';

function Page() {
  return (
    <>
      <div className="bg-black py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold text-white">Modern <span className='text-red-500'>Frontend</span> Development</h1>
      </div>

      <div className='mt-4 px-4 md:px-10 lg:px-20'>
        <h3 className='text-center text-md md:text-3xl font-sans font-bold text-white'>How we can <span className='text-slate-400'>Develop a great frontend</span> in <span className="text-yellow-400">Next.js</span>?</h3>
        <div className='text-center mt-5 text-sm md:text-base lg:text-lg font-sans font-semibold text-white space-y-6'>
          <div>
            <p className="p-4 bg-gray-800 rounded-lg shadow">
              <span className='block text-xl md:text-2xl font-sans font-bold text-white mb-2'>Leverage Server-Side Rendering (SSR) and Static Site Generation (SSG) Wisely:</span>
              SSR is one of Next.js's most powerful features, allowing you to render pages on the server at request time. It's particularly useful for SEO and improving the performance of dynamic content. Use SSR for pages that need real-time data or have frequently updating content.
              SSG generates HTML at build time, which can be cached and served by a CDN. It's perfect for pages that don't change often and can be pre-rendered. This significantly improves load times and is also beneficial for SEO. Use SSG for blog posts, documentation, and any content that doesn't require immediate updates.
            </p>
            <p className="p-4 bg-gray-800 rounded-lg shadow">
              <span className='block text-xl md:text-2xl font-sans font-bold text-white mb-2 mt-2'>Optimize Images with Next.js Image Component:</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti excepturi maxime magni molestiae quidem autem adipisci voluptatibus sed! Deleniti ab officia repellat maiores.
            </p>
            <p className="p-4 bg-gray-800 rounded-lg shadow">
              <span className='block text-xl md:text-2xl font-sans font-bold text-white mb-2 mt-2'>Utilize Incremental Static Regeneration (ISR):</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti excepturi maxime magni molestiae quidem autem adipisci voluptatibus sed! Deleniti ab officia repellat maiores.
            </p>
            <p className="p-4 bg-gray-800 rounded-lg shadow">
              <span className='block text-xl md:text-2xl font-sans font-bold text-white mb-2 mt-2'>Follow Best Practices for Accessibility and SEO:</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti excepturi maxime magni molestiae quidem autem adipisci voluptatibus sed! Deleniti ab officia repellat maiores.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;