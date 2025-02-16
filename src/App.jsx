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