'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

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
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">UPCOMING WEB DEVELOPMENT WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Advance Your Web Development Skills</p>
        </div>

        <div className="mt-10">
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

        <div className="mt-10 text-center">
          <Link href={"/webinars"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View Our Guide 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars