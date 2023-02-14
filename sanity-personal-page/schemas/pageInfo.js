export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'typewriterInfo',
      title: 'TypewriterInfo',
      type: 'reference',
      to: [{type: 'typewriter'}],
    },
    {
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
  ],
}
