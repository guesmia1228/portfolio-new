"use client";
import Link from "next/link"
import { Timeline } from "../components/Timeline/Timeline"
import { useTheme } from "../contexts/ThemeContext"

// Personal events data
const personalEvents = [
  {
    id: 1,
    date: "1995-12-28",
    title: "Born",
    description: "Entered the world and began my journey.",
    additionalInfo: "Born in winter, marking the beginning of my adventure. My family was overjoyed to welcome me."
  },
  {
    id: 2,
    date: "2001-09-01",
    title: "Started School",
    description: "Embarked on my educational adventure.",
    additionalInfo: "My first day of school was filled with excitement and nervousness. I made my first friends and discovered my love for learning."
  },
  {
    id: 3,
    date: "2011-08-30",
    title: "First Computer",
    description: "Got my first personal computer and discovered the digital world.",
    additionalInfo: "It was a Windows PC with modest specs, but it opened up a whole new world for me. I spent hours exploring software, games, and started learning programming."
  },
  {
    id: 4,
    date: "2012-05-20",
    title: "Graduated High School",
    description: "Completed secondary education and prepared for the next chapter.",
    additionalInfo: "Graduated with honors and received recognition for achievements in computer science and mathematics."
  },
  {
    id: 5,
    date: "2016-06-10",
    title: "College Graduation",
    description: "Earned my degree and stepped into the professional world.",
    additionalInfo: "Graduated with a degree in Computer Science. My final project focused on web development and AI, which helped me secure my first job."
  },
  {
    id: 6,
    date: "2021-03-24",
    title: "Master of Engineering",
    description: "Completed my Master's degree in Engineering.",
    additionalInfo: "Focused on advanced topics in software engineering and machine learning. My thesis explored the applications of AI in real-world scenarios."
  },
  {
    id: 7,
    date: "2016-06-20",
    title: "Started First Job",
    description: "Began my career in the tech industry.",
    additionalInfo: "Joined a tech company as a software developer. Working on challenging projects has helped me grow professionally."
  },
  {
    id: 8,
    date: "2019-12-28",
    title: "25th Birthday",
    description: "Celebrating a quarter-century of life and looking forward to the future.",
    additionalInfo: "Reflecting on my journey and setting new goals for the future."
  }
];

export default function TimelinePage() {
  const { theme } = useTheme();
  
  // Sort events by date in descending order (most recent first)
  const sortedEvents = [...personalEvents].sort((a, b) => {             
    return new Date(b.date) - new Date(a.date);
  });
  
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto pt-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <Link href="/" className={`${theme.primary} hover:underline mb-6 inline-block text-sm sm:text-base`}>
          ← Back to Home
        </Link>
        <h1 className={`text-3xl font-bold mb-4 ${theme.primary}`}>My Timeline</h1>
        <p className={`mb-8 ${theme.secondary}`}>A chronological journey through the key moments of my life, starting with the most recent events.</p>
      </div>
      <Timeline data={sortedEvents} />
    </div>
  );
} 