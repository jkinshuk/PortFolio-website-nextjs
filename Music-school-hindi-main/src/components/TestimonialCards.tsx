'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        ' The belief that the world is getting worse, that we cant solve extreme poverty and disease, isnt just mistaken',
      name: 'Bill Gates',
      title: 'Microsoft Founder',
    },
    {
      quote:
        "innovation distinguishes between a leader and a follower your time is limited, so dont waste it living someone else life. ...Dont let the noise of others opinions drown out your own inner voice",
      name: 'Steve Jobs ',
      title: 'Apple Founder and CEO ',
    },
    {
      quote:
        "I know fear is an obstacle for some people, but it is an illusion to me.",
      name: 'Michael Jordan',
      title: 'BasketBall Player',
    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of  Most successfull People :</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials