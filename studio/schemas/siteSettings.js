export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'intro',
      title: 'Intro Text',
      type: 'text'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    }
  }
}
