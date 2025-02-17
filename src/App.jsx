// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import ProjectsList from './components/ProjectsList';

const App = () => {
  const projects = [
    {
        id: 1,
        title: 'Senior iOS Developer Needed',
        location: 'Miami',
        postedDate: '2d ago',
        proposalsCount: 8,
        priceRange: '$85 - $120',
        rateType: 'Hourly',
        description: 'We need an experienced iOS developer to help build a next-generation social media app using SwiftUI and Combine.',
        skills: ['SwiftUI', 'Combine', 'Firebase', 'CI/CD']
    },
    {
        id: 2,
        title: 'E-commerce Website Redesign',
        location: 'New York',
        postedDate: '1 week ago',
        proposalsCount: 15,
        priceRange: '$5000 - $8000',
        rateType: 'Fixed',
        description: 'Complete redesign of existing e-commerce platform with modern UX/UI principles and Shopify integration.',
        skills: ['React', 'Shopify', 'Figma', 'Webflow']
    },
    {
        id: 3,
        title: 'Machine Learning Engineer',
        location: 'San Francisco',
        postedDate: '1 week ago',
        proposalsCount: 10,
        priceRange: '$100 - $150',
        rateType: 'Hourly',
        description: 'Looking for a machine learning engineer to develop predictive models for our analytics platform.',
        skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn']
    },
    {
        id: 4,
        title: 'Full Stack Developer for Startup',
        location: 'Austin',
        postedDate: '3 days ago',
        proposalsCount: 5,
        priceRange: '$70 - $100',
        rateType: 'Hourly',
        description: 'Join our startup as a full stack developer to build innovative web applications.',
        skills: ['Node.js', 'React', 'MongoDB', 'Express']
    },
    {
        id: 5,
        title: 'Graphic Designer for Marketing Campaign',
        location: 'Los Angeles',
        postedDate: '2 weeks ago',
        proposalsCount: 12,
        priceRange: '$3000 - $5000',
        rateType: 'Fixed',
        description: 'Seeking a graphic designer to create visuals for our upcoming marketing campaign.',
        skills: ['Adobe Photoshop', 'Illustrator', 'InDesign']
    },
    {
        id: 6,
        title: 'Data Analyst for Research Project',
        location: 'Chicago',
        postedDate: '4 days ago',
        proposalsCount: 7,
        priceRange: '$50 - $80',
        rateType: 'Hourly',
        description: 'We need a data analyst to help analyze survey data and generate reports.',
        skills: ['SQL', 'Excel', 'R', 'Tableau']
    },
    {
        id: 7,
        title: 'DevOps Engineer Needed Immediately',
        location: 'Seattle',
        postedDate: '1 day ago',
        proposalsCount: 9,
        priceRange: '$90 - $130',
        rateType: 'Hourly',
        description: 'Looking for a DevOps engineer to streamline our deployment processes and manage cloud infrastructure.',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
        id: 8,
        title: 'Blockchain Developer for New Project',
        location: 'Denver',
        postedDate: '5 days ago',
        proposalsCount: 6,
        priceRange: '$120 - $180',
        rateType: 'Hourly',
        description: "Join our team as a blockchain developer to create decentralized applications.",
        skills: ['Solidity', 'Ethereum', 'Smart Contracts']
    },
    {
       id: 9,
       title:'Content Writer for Tech Blog',
       location:'Remote',
       postedDate:'1 week ago',
       proposalsCount:'20',
       priceRange:'$30 - $50',
       rateType:'Hourly',
       description:'We are looking for a content writer who can create engaging articles on technology trends.',
       skills:['SEO','WordPress','Research']
    },
    {
       id : 10,
       title : "Mobile App Tester",
       location : "Boston",
       postedDate : "2 weeks ago",
       proposalsCount : 4,
       priceRange : "$40 - $60",
       rateType : "Hourly",
       description : "We need a mobile app tester to ensure the quality of our new application before launch.",
       skills : ["iOS", "Android", "TestFlight", "JIRA"]
    },
    {
      id : 11,
      title : "Cybersecurity Consultant",
      location : "Washington, D.C.",
      postedDate : "3 weeks ago",
      proposalsCount : 3,
      priceRange : "$150 - $200",
      rateType : "Hourly",
      description : "Seeking a cybersecurity consultant to assess and improve our security protocols.",
      skills : ["Network Security", "Penetration Testing", "Compliance"]
   }
];

  return (
    <div>
      <Navbar />
      <ProjectsList projects={projects} />
    </div>
  );
};

export default App;