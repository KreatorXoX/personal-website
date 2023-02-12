interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  about: string;
  address: string;
  email: string;
  heroImage: Image;
  profileImage: Image;
  role: string;
  socials: Social[];
  typewriterInfo: Typewriter;
}

export interface Social extends SanityBody {
  _type: "social";
  socialName: string;
  socialUrl: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  masteryLevel: number;
  skillImage: Image;
  skillName: string;
}
export interface Project extends SanityBody {
  _type: "project";
  projectData: string;
  projectImage: Image;
  projectLink: string;
  projectName: string;
  projectSummary: string;
  technologiesUsed: Skill[];
}

export interface Typewriter extends SanityBody {
  _type: "typewriter";
  typeInfo: string[];
}
