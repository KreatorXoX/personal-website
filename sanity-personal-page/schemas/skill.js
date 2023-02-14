export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'skillName',
      title: 'Skill Name',
      type: 'string',
    },
    {
      name: 'skillImage',
      title: 'Skill Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'masteryLevel',
      title: 'Mastery Level',
      type: 'number',
      validation: (rule) => {
        return rule.min(0).max(100)
      },
    },
  ],
}
