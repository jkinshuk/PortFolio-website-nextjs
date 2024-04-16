"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const webDevSchoolContent = [
    {
      title: 'Embark on Your Web Development Journey: Tailored Learning Paths',
      description:
        'Dive into the world of web development with a learning experience designed around your goals and skills. Our courses adapt to your pace and style, ensuring you build a solid foundation in coding, design, and development practices. Join us to transform your curiosity into expertise through a journey tailored just for you.',
    },
    {
      title: 'Interactive Learning with Immediate Feedback',
      description:
        'Experience learning that feels like you’re working on real-world projects. Our interactive platform provides instant feedback on your code, helping you understand concepts and correct mistakes on the fly. This dynamic approach accelerates your learning and prepares you for the collaborative nature of modern web development.',
    },
    {
      title: 'Stay Ahead with Cutting-Edge Curriculum',
      description:
        'Our curriculum is at the forefront of technology, incorporating the latest trends, tools, and best practices in web development. From front-end frameworks like React and Vue to back-end technologies such as Node.js and Django, we ensure you’re equipped with the knowledge to thrive in the ever-evolving tech landscape.',
    },
    {
      title: 'Unlimited Learning Resources and Community Support',
      description:
        'Gain access to an extensive library of resources, tutorials, and guides, complemented by a supportive community of instructors and peers. Whether you’re starting from scratch or looking to specialize in areas like full-stack development or UI/UX design, our platform is your gateway to continuous learning and growth.',
    },
    {
      title: 'Real-World Projects and Portfolio Building',
      description:
        'Put theory into practice with hands-on projects that simulate real-world challenges. Build a diverse portfolio of work that showcases your skills and creativity to potential employers. Our project-based learning approach not only enhances your understanding but also prepares you for the demands of the tech industry.',
    },
    {
      title: 'Flexible Learning That Fits Your Life',
      description:
        'We understand that life is busy. That’s why our courses are designed for flexibility, allowing you to learn at your own pace and on your schedule. Whether you’re upskilling after hours or transitioning to a tech career, our platform supports your journey every step of the way.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={webDevSchoolContent} />
    </div>
  )
}

export default WhyChooseUs;