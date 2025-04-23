import React, { useRef, useState, useEffect } from 'react';

// Replace with your actual icons
import html_icon from '../icons/html_icon.svg';
import css_icon from '../icons/css_icon.svg';
import aws_icon from '../icons/aws_icon.svg';
import javascript_icon from '../icons/javascript_icon.svg';
import react_icon from '../icons/react_icon.svg';
import git_icon from '../icons/git_icon.svg';
import mongodb_icon from '../icons/mongo_db_icons.jpg';
import typescript_icon from '../icons/typescript_icon.svg';
import docker_icon from '../icons/docker_icon.svg';
import tailwind_icon from '../icons/tailwind_icon.svg';
import angular_icon from '../icons/angular_icon.svg';
import mysql_icon from '../icons/mysql_icon.svg';
import spring_boot_icon from '../icons/spring_boot_icon.jpg';
import jenkins_icon from '../icons/jenkins_icon.jpg';

const skills = [
  { name: 'HTML', icon: html_icon },
  { name: 'CSS', icon: css_icon },
  { name: 'AWS', icon: aws_icon },
  { name: 'JavaScript', icon: javascript_icon },
  { name: 'React JS', icon: react_icon },
  { name: 'GitHub', icon: git_icon },
  { name: 'MongoDB', icon: mongodb_icon },
  { name: 'Type Script', icon: typescript_icon },
  { name: 'Dockers', icon: docker_icon },
  { name: 'Tail Wind', icon: tailwind_icon },
  { name: 'My SQL', icon: mysql_icon },
  { name: 'Angular', icon: angular_icon },
  { name: 'Sprint Boot', icon: spring_boot_icon },
  {name: 'Jenkins', icon: jenkins_icon }
];

export default function SkillsMenu() {
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [segments, setSegments] = useState(1);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
  
    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const segmentCount = Math.ceil(el.scrollHeight / el.clientHeight); // dynamic segments
      const percentScrolled = scrollTop / scrollHeight;
      const index = Math.floor(percentScrolled * segmentCount);
      setActiveIndex(index);
      setSegments(segmentCount);
    };
  
    // Initial segment setup
    const segmentCount = Math.ceil(el.scrollHeight / el.clientHeight);
    setSegments(segmentCount);
  
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className=" text-white pt-10 px-4 relative mb-[-42px]">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold text-yellow-400">What I do</h2>
        <p className="mt-2 text-gray-300 max-w-10xl mx-auto">
        I am a Java Backend Developer with over 5 years of experience building scalable and high-performance backend systems. I specialize in Core Java, Spring Boot, and RESTful APIs, and have a strong background in designing microservices architectures and event-driven systems using Apache Kafka. I’ve worked extensively with both SQL and NoSQL databases like MongoDB, Cassandra, and MySQL, and have integrated modern tools like Elasticsearch and Apache Solr for search optimization.
        My DevOps expertise includes Docker, Jenkins, and Kubernetes, and I’ve deployed applications on major cloud platforms including AWS and Azure. I'm also familiar with Angular for front-end work and have experience building responsive interfaces. I'm passionate about clean architecture, system reliability, and delivering robust software solutions.
        </p>
      </div>

      <div className="flex flex-1">
        {/* Scrollable Skills Grid with hidden scrollbar */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 h-[300px] overflow-y-scroll pl-10 pr-4 custom-scrollbar-hide"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[150px] bg-gray-900 p-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-200 flex flex-col items-center justify-center"
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
              <p className="text-sm font-semibold text-white">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Custom vertical scroll indicator (fake scrollbar) */}
        <div className="flex flex-col space-y-2 ml-4 mt-2 items-center justify-center">
          {[...Array(segments)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-5 rounded-full transition-all duration-200 ${
                i === activeIndex ? 'bg-yellow-400' : 'bg-gray-600'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
