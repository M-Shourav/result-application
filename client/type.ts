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

export interface TeacherDataType {
  _id: string;
  slug: string;
  name: string;
  title: string;
  quote: string;
  psdId: string;
  joiningDate: string;
  createdAt: string;
  updatedAt: string;
  avatar: {
    public_id: string;
    url: string;
    _id: string;
  };
  socialLinks: {
    phone: string;
    email: string;
    facebook: string;
    linkedin: string;
  };
  __v: number;
}

export interface CommitteeMember {
  _id: string;
  name: string;
  title: string;

  memberJoin: string;
  membershipTerm: string;

  createdAt: string;
  updatedAt: string;

  avatar: {
    url: string;
    public_id: string;
    _id: string;
  };

  socialLinks: {
    phone: string;
    email: string;
    facebook: string;
    linkedin: string;
  };
}

export interface AvatarType {
  url: string;
  public_id: string;
  _id: string;
}

export interface StudentType {
  _id: string;
  name: string;
  roll: string;
  group: string;
  year: string;
  className: string;
  avatar: AvatarType;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
