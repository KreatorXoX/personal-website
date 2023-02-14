export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'projectDate',
      title: 'Project Date',
      type: 'string',
    },
    {
      name: 'projectSummary',
      title: 'Project Summary',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
  ],
}
