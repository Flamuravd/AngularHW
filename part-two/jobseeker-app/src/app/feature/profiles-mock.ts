import { ProfileModel } from './models/profile-model';

export const profilesMock: ProfileModel[] = [
  {
    id: 1,
    name: 'John Smith',
    email: 'smith12@gmail.com',
    phone: '2-402-092-4398',
    dateOfBirth: new Date(1995, 8, 23),
    workExperience: 'Microsoft - Frontend Developer, Intel - Web Designer',
    currentWorkStatus: 'unemployed',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane73@gmail.com',
    phone: '4-823-982-9384',
    dateOfBirth: new Date(1999, 2, 12),
    workExperience: 'Meta - Backend Developer, Dell - Data Analyst',
    currentWorkStatus: 'freelancer',
  },
  {
    id: 3,
    name: 'Tim Williams',
    email: 'tim23@gmail.com',
    phone: '1-235-8923-8092',
    dateOfBirth: new Date(2001, 10, 28),
    workExperience: 'SAP - Fullstack Developer, Panasonic - Software Developer',
    currentWorkStatus: 'employed',
  },
  {
    id: 4,
    name: 'Caroline Forbes',
    email: 'caroline99@gmail.com',
    phone: '6-984-023-9802',
    dateOfBirth: new Date(1992, 6, 30),
    workExperience: 'Sony - Software Engineer, SAP - Web Designer',
    currentWorkStatus: 'looking for opportunities',
  },
];
