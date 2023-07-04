export const pageInfoQuery = `
  *[_type=='pageInfo'][0]{
  ...,
  socials[]->,typewriterInfo->
  }
  `;
export const projectsQuery = `
  *[_type=='project']{
  ...,
  technologiesUsed[]->
  }
  `;
export const socialsQuery = `
  *[_type=='social']
  `;
export const skillsQuery = `
  *[_type=='skill']
  `;
