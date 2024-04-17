'use client'
import Link from "next/link"
import { HoverEffect } from "@/components/ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Modern Frontend Development',
      description:
        'Explore the latest trends and tools in frontend development, including frameworks like React, Vue, and Angular.',
      slug: 'modern-frontend-development',
      isFeatured: true,
    },
    {
      title: 'Full Stack Development Essentials',
      description:
        'Dive into full stack development with a focus on integrating frontend and backend technologies seamlessly.',
      slug: 'full-stack-development-essentials',
      isFeatured: true,
    },
    {
      title: 'Advanced CSS Techniques',
      description:
        'Master advanced CSS techniques to create visually stunning and responsive web designs.',
      slug: 'advanced-css-techniques',
      isFeatured: true,
    },
    {
      title: 'JavaScript Deep Dive',
      description:
        'A comprehensive overview of JavaScript, covering ES6 features, asynchronous programming, and more.',
      slug: 'javascript-deep-dive',
      isFeatured: true,
    },
    {
      title: 'Web Performance Optimization',
      description:
        'Learn how to optimize your websites for speed and performance to enhance user experience.',
      slug: 'web-performance-optimization',
      isFeatured: true,
    },
    {
      title: 'Building RESTful APIs',
      description:
        'Understand the principles of REST and how to build efficient APIs for your web applications.',
      slug: 'building-restful-apis',
      isFeatured: true,
    },
    {
      title: 'Building RESTful APIs',
      description:
        'Understand the principles of REST and how to build efficient APIs for your web applications.',
      slug: 'building-restful-apis',
      isFeatured: true,
    },
    {
      title: 'Building RESTful APIs',
      description:
        'Understand the principles of REST and how to build efficient APIs for your web applications.',
      slug: 'building-restful-apis',
      isFeatured: true,
    },
    {
      title: 'Building RESTful APIs',
      description:
        'Understand the principles of REST and how to build efficient APIs for your web applications.',
      slug: 'building-restful-apis',
      isFeatured: true,
    },
    {
      title: 'Building RESTful APIs',
      description:
        'Understand the principles of REST and how to build efficient APIs for your web applications.',
      slug: 'building-restful-apis',
      isFeatured: true,
    },
    {
      title: 'Building RESTful APIs',
      description:
        'Understand the principles of REST and how to build efficient APIs for your web applications.',
      slug: 'building-restful-apis',
      isFeatured: true,
    },
  ];

  return (
    <>
    <div className=" bg-black py-12 pt-36">
    <h1 className="text-lg md:text-7xl text-center font-sans font-bold  text-white">All Guides </h1> 
    </div> 
        <div className="m-7">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/webinars/' + webinar.slug // Assuming each webinar has a dedicated page
              
            }
          ))}
          />
        </div>
    </>
   
  )
}

export default UpcomingWebinars