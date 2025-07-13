import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJava } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiSpring } from "react-icons/si";

export const links = [
  {
    name: "Introduction",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Work Daily",
    hash: "#work-daily",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "VnLink Group",
    period: "03/2025 - Present",
    projects: [
      {
        title: "Booking Flight Website",
        role: "Java Developer",
        period: "03/2025 - Present",
        description: [
          "Migrated the legacy OTA-based booking system to the modern NDC (New Distribution Capability) standard, enabling richer and more dynamic airline content distribution",
          "Handled business logic related to flight ticket operations, including booking, manage seatmap",
          "Detect bug and resolve issue in system",
          "Managed and optimized caching strategies by integrating Redis with mongoDB, ensuring fast data retrieval and system scalability"
        ],
        technologies: ["Java", "Redis", "PostgreSQL", "Oracle", "ELK stack"],
        icon: React.createElement(FaJava),
      }
    ]
  },
  {
    company: "8seneca",
    period: "09/2022 - 03/2025",
    projects: [
      {
        title: "GIS Infrastructure Management",
        role: "Java Developer",
        period: "02/2024 - 03/2025",
        description: [
          "Geographic Information Systems - infrastructure management system for German and Czech customers",
          "Be in charge of implementing some basic features on BackEnd side every quarter",
          "Perform work according to assigned tasks on Jira and complete it",
          "Maintain and develop features in the desktop application for managing different cable types on the map, including adding, deleting, and editing cables",
          "Join working with ELK stack to manage logging and auditing, monitoring it in Kibana",
          "Besides working with Elasticsearch to manage statistics if required",
          "Manage Configuration of important key with Vault system"
        ],
        technologies: ["Java", "Spring Boot", "Elasticsearch", "Kafka", "Docker", "ELK stack", "Vault"],
        icon: React.createElement(SiSpring),
      },
      {
        title: "Mercon Coffee Platform",
        role: "Java Developer",
        period: "05/2024 - 12/2024",
        description: [
          "Develop website about evaluating and rewarding of each member of multinational coffee corporation Mercon Coffee",
          "Understand and analyze project requirements to make sure they meet business needs",
          "Develop and improve backend features with Java and Spring Boot",
          "Find and fix bugs to keep the system running smoothly",
          "Manage data storage in S3",
          "Maintain service in server with docker and kubernerties",
          "Create a document for release",
          "Wrote unit tests with JUnit and Mockito, increasing code coverage around 80%",
          "Working with Sql statements to match both databases in use, OracleSQL and PostGreSQL"
        ],
        technologies: ["Java", "Spring Boot", "JPA", "Docker", "Kubernetes", "OracleSQL", "PostgreSQL", "JUnit", "Mockito"],
        icon: React.createElement(CgWorkAlt),
      },
      {
        title: "Mobile Chat Application",
        role: "React Native Developer",
        period: "06/2023 - 10/2023",
        description: [
          "Internal project - Join in the project of developing ChatApp on mobile site and break more knowledge with React-native",
          "Developed UI/UX, ensuring smooth interactions",
          "Working with Socket to handle chat message",
          "Improve Approval feature for day leave request",
          "Integrated APIs from the backend using Axios"
        ],
        technologies: ["React Native", "TypeScript", "Socket.io", "Axios", "WebStorm", "Android Studio", "Xcode"],
        icon: React.createElement(FaReact),
      },
      {
        title: "Search Engine Platform",
        role: "Java Developer",
        period: "09/2022 - 05/2023",
        description: [
          "Create a search application with large amounts of data and crawl data from many different sources",
          "Developed a large-scale data crawling and search application using microservices",
          "Implemented OAuth2 + JWT for secure user authentication",
          "Integrated RabbitMQ to transmit data between services, optimizing processing time and ensuring high performance",
          "Applied GCP and Dokcer to deploy cloud services"
        ],
        technologies: ["Java", "Spring Boot", "JPA", "PostgreSQL", "RabbitMQ", "Docker", "GCP", "OAuth2", "JWT"],
        icon: React.createElement(FaJava),
      }
    ]
  }
] as const;

export const educationData = [
  {
    title: "Information Technology",
    location: "Hanoi University of Science and Technology (HUST)",
    description:
      "Studied Information Technology at one of Vietnam's leading technical universities, focusing on software development and computer science fundamentals.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Mechanical Engineering",
    location: "Hanoi University of Science and Technology (HUST)",
    description:
      "Completed Bachelor's degree in Mechanical Engineering, providing strong analytical and problem-solving foundation that complements programming skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Booking Flight Website",
    description:
      "Modern NDC-based flight booking platform with Redis caching and optimized search functionality",
    tags: ["Java", "Redis", "PostgreSQL", "Oracle", "ELK"],
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&q=80",
  },
  {
    title: "GIS Infrastructure Management",
    description:
      "Geographic Information Systems infrastructure management for German and Czech customers",
    tags: ["Java", "Spring Boot", "Elasticsearch", "Kafka", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&q=80",
  },
  {
    title: "Mercon Coffee Platform",
    description:
      "Employee evaluation and reward system for multinational coffee corporation",
    tags: ["Java", "Spring Boot", "JPA", "Docker", "Kubernetes"],
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&q=80",
  },
  {
    title: "Mobile Chat Application",
    description:
      "Real-time chat application with approval workflow features for internal use",
    tags: ["React Native", "TypeScript", "Socket.io", "Axios"],
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&q=80",
  },
  {
    title: "Search Engine Platform",
    description:
      "Large-scale data crawling and search application with microservices architecture",
    tags: ["Java", "Spring Boot", "RabbitMQ", "OAuth2", "GCP"],
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&q=80",
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "Spring Framework",
  "PostgreSQL",
  "OracleSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "RabbitMQ",
  "Kafka",
  "Elasticsearch",
  "Git",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "AWS",
  "GCP",
  "Kibana",
  "Jenkins",
] as const;