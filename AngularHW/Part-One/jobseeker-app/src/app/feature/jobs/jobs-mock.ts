import { Job } from './models/job-model';

export const jobsMock: Job[] = [
  {
    company: 'Google',
    expires: '2025-09-01',
    position: 'Front-End Developer',
    startingSalary: 1200,
    workType: 'remote',
    location: 'San Francisco, California',
    country: 'USA',
    qualifications: 'Html, Css, JavaScript',
    description:
      'We are looking for a frontend developer to work on building modern web applications. The ideal candidate should have experience with HTML, CSS, and JavaScript, as well as an understanding of responsive design concepts. The role involves close collaboration with the design and backend teams to deliver high-quality products to clients.',
    isApplied: false,
  },
  {
    company: 'Amazon',
    expires: '2025-09-05',
    position: 'Back-End Developer',
    startingSalary: 1500,
    workType: 'remote',
    location: 'Los Angeles, California',
    country: 'USA',
    qualifications: 'Node.Js, PostgreSQL, MongoDB',
    description:
      'We are seeking a backend developer to work on developing secure and efficient APIs. The candidate should have solid knowledge of Node.js and databases (SQL or NoSQL). The role includes optimizing performance and ensuring smooth integration with frontend systems.',
    isApplied: false,
  },
  {
    company: 'Netflix',
    expires: '2025-08-27',
    position: 'Data Analyst',
    startingSalary: 1700,
    workType: 'onsite',
    location: 'Chicago, Illinois',
    country: 'USA',
    qualifications: 'Excel, SQL',
    description:
      'Our team is looking for a data analyst to analyze and interpret key business information. The candidate should have strong skills in Excel, SQL, and visualization tools (e.g., Power BI, Tableau). The role involves creating reports and providing strategic recommendations to management.',
    isApplied: false,
  },
  {
    company: 'Facebook',
    expires: '2025-08-30',
    position: 'Graphic Design',
    startingSalary: 1000,
    workType: 'hybrid',
    location: 'Las Vegas, Nevada',
    country: 'USA',
    qualifications: 'Photoshop, Illustrator',
    description:
      'We are looking for a creative graphic designer to produce visual materials for social media, websites, and marketing campaigns. The candidate should have experience with Photoshop and Illustrator, as well as the ability to work with details and generate fresh ideas.',
    isApplied: false,
  },
];
