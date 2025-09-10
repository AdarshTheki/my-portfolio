export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Completion Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'place',
      title: 'Location / Company',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(20),
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {value: 'personal', title: 'Personal'},
          {value: 'client', title: 'Client'},
          {value: 'school', title: 'School'},
          {value: 'openSource', title: 'Open Source'},
          {value: 'research', title: 'Research'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'link',
      title: 'Project URL / Repository Link',
      type: 'url',
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Highlight this project on the homepage',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'projectType',
    },
  },
}
