"use client";

import { useState } from 'react';
import Project from './project'; 

const Projects: React.FC = () => {
  const initialVisibleProjects = 4;
  const [visibleProjects, setVisibleProjects] = useState(initialVisibleProjects);

  const projects = [
    {
      imageSrc: '/images/react-google-calendar.png',
      title: 'React Google Calendar',
      description: 'Built an open-source React component that utilizes the Google Calendar API to create a customizable and modern calendar design.\
      It has over 130 stars on Github and I\'ve received and merged contributions from developers worldwide.',
      technologies: [{text: 'React.js', icon: 'react'}, {text: 'Typescript', icon: 'typescript'}],
      githubLink: 'https://github.com/ericz1803/react-google-calendar',
      externalLink: 'https://ericz1803.github.io/react-test-calendar/',
    },
    {
      imageSrc: '/images/congress.jpg',
      title: 'Congressional Trader',
      description: 'Created a trading bot that leverages congressional trading data to make informed trading decisions, \
      aiming to capitalize on potential market movements influenced by legislative actions. I scrape congressional trading data from capitoltrades.com \
      and use it to build a portfolio that gets rebalanced automatically with AWS Lambda and Alpaca\'s Trading Platform.',
      technologies: [{text: 'Python', icon: 'python'}, {text: 'Amazon Web Services', icon: 'amazonwebservices'}],
      githubLink: 'https://github.com/ericz1803/CongressionalTrader'
    },
    {
      imageSrc: '/images/fratrank.png',
      title: 'FratRank',
      description: 'Worked as part of a team in building a full-stack app that allows users to anonymously review and compare fraternities at UCLA.\
      Some notable features include our authentication system, a review and review voting system that get stored in Firebase, and scraping Instagram for posts.',
      technologies: [{text: 'React.js', icon: 'react'}, {text: 'Javascript', icon: 'javascript'}, {text: 'Google Cloud Platform', icon: 'googlecloud'}, {text: 'Firebase', icon: 'firebase'}],
      externalLink: 'https://fratrank-1278b.firebaseapp.com/'
    },
    {
      imageSrc: '/images/Spotify_icon.svg',
      title: 'Spotify Recommendations',
      description: 'Developed a recommendation system using scikit learn to suggest songs based on users’ playlists. \
      I performed data extraction, cleaning, and transformation on more than 7 million songs using Pandas and used the recommendations\
      to find music that matched my playlists and preferences, enhancing music discovery.',
      technologies: [{text: 'Python', icon: 'python'}, {text: 'Pandas', icon: 'pandas'}, {text: 'Scikit Learn', icon: 'python'}],
      githubLink: 'https://github.com/ericz1803/spotify-recommendations'
    },
    
    // Add more project objects as needed
  ];

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="mx-auto max-w-6xl py-12 px-4 lg:px-8">
      <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button
          className="text-indigo-500 hover:underline cursor-pointer mt-4"
          onClick={showMoreProjects}
        >
          Show More Projects
        </button>
      )}
    </div>
  );
};

export default Projects;