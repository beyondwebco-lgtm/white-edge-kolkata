import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons/Tag'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'The title of this category (e.g. LED Signage, 3D Letters, Storefronts, Façade Branding).',
      placeholder: 'e.g. LED Signage',
      validation: (rule) => rule.required().error('Category name is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated web identifier. Click "Generate" to create it automatically from the category name.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional summary describing the types of signages in this category.',
      placeholder: 'e.g. Architectural frontlit and backlit illuminated signage...',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Optional number used to control category tab order on the website. Lower numbers appear first (e.g. 1, 2, 3).',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Turn off to temporarily hide this category from the website without deleting it.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      slug: 'slug.current',
      active: 'active',
    },
    prepare({title, slug, active}) {
      return {
        title: title || 'Untitled Category',
        subtitle: `${slug ? `/${slug}` : 'No slug'} ${active === false ? '• (Inactive)' : ''}`,
      }
    },
  },
})
