export interface Subject {
  _id: string;
  name: string;
  code: string;
  mark: number;
}

export interface StudentResult {
  _id: string;
  name: string;
  roll: number;
  class: string;
  section: string;
  year: string;
  grade: string;
  result: string;
  gpa: string;
  subjects: Subject[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
