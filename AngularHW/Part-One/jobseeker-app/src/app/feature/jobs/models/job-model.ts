export interface Job {
  // Mandatory to be shown in the posting
  company: string;
  expires: string;
  position: string;
  startingSalary: number;
  workType: 'remote' | 'onsite' | 'hybrid';
  // Show the below in the details expanding element
  location: string;
  country: string;
  qualifications: string;
  description: string;
  isApplied: boolean;
}
