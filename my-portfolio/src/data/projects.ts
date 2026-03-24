import upNext from '../assets/upnext.png';
import upNextHeroImage from '../assets/upnext_heroImage.png'
import loomi from '../assets/loomi_icon.jpg';
import loomiHeroImage from '../assets/loomi-hero.png';
import residentHealthCare from '../assets/residentHealthCare.png';
import ISM_AdminProject from '../assets/ISM_AdminProject.png';
import portfolioWebsite from '../assets/portfolioWebsite.png';
import dataScience from '../assets/dataScience.png';
import dataScienceHeroImage from '../assets/dataScience_heroImage.png';

export const projects = [
  {
    id: 1,
    title: 'UpNext',
    description:
      'An adaptive assignment planner prototype that helps students break assignments into manageable sessions, visualises progress, and produces deadline-aware suggestions. Won 4th place in the CSIT X SWITCH 2025 Hackathon.',
    image: upNext,
    heroImage: upNextHeroImage,
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git', 'Figma'],
    github: 'https://github.com/JovenTung/UpNext.git',
    live: 'https://up-next-theta.vercel.app/',
    contentPath: '/content/upnext.md',
  },
  {
    id: 2,
    title: 'Loomi',
    description:
      'A parental media review iOS app prototype for parents who want to find media with specific positive values for their young children. Completed as part of a 3-week intensive RMIT Apple Foundation Program course.',
    image: loomi,
    heroImage: loomiHeroImage,
    tags: ['Swift', 'SwiftUI', 'Figma'],
    github: 'https://github.com/quanzee/loomi.git',
    live: '#',
    contentPath: '/content/loomi.md',
  },
  {
    id: 3,
    title: 'Resident HealthCare System',
    description:
      'A resident healthcare management system with different interfaces for different staff roles in a care home with a fully functioning backend and frontend. Completed as part of an Advanced Programming course.',
    image: residentHealthCare,
    heroImage: residentHealthCare,
    tags: ['Java', 'SQL'],
    github: 'https://github.com/COSC1295-advanced-programming-2025-s2/s4160608_JannaQianZiNg_Assignment2.git',
    live: '#',
    contentPath: '/content/residentHealthCare.md'
  },
  {
    id: 4,
    title: 'Administrative Data Management Project',
    description:
      'Assisted a local music school business in managing their administrative data by creating a Google Sheets system for tracking student attendance and teachers\' wages, and a Figma prototype for a potential future web app to manage this data more efficiently.',
    image: ISM_AdminProject,
    heroImage: ISM_AdminProject,
    tags: ['Google Sheets', 'Figma'],
    github: 'https://www.figma.com/design/qXqzwA7DkOpFBKfVH7WMGF/ISM-A-W-App?node-id=0-1&t=VTcIvfkD4iaZRoUa-1',
    live: '#',
    contentPath: '/content/ISM_AdminProject.md'
  },
          {
    id: 7,
    title: 'This Portfolio Website',
    description:
      'The website you are on right now, built from scratch.',
    image: portfolioWebsite,
    heroImage: portfolioWebsite,
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/quanzee/portfolio-website.git',
    live: 'http://localhost:5173/#home',
    contentPath: '/content/portfolio_website.md'
  },
    {
    id: 5,
    title: 'Movie Recommender System Assignment',
    description:
      'Implemented and evaluated several recommender system algorithms, including user-based and item-based collaborative filtering, matrix factorization, and content-based filtering, using the MovieLens dataset. Completed as part of a Data Science course.',
    image: dataScience,
    heroImage: dataScienceHeroImage,
    tags: ['Python', 'Data Analysis', 'Machine Learning'],
    github: '#',
    live: '#',
    contentPath: '/content/movie_recommender_system.md'
  },

];