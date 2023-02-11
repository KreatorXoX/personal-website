import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'typewriter',
  title: 'Typewriter',
  type: 'document',
  fields: [
    defineField({
      name: 'typeInfo',
      title: 'Type Info',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
