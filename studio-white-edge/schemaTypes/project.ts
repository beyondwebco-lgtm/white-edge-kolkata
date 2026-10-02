import {defineType, defineField, defineArrayMember} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {
      name: 'basic',
      title: 'Basic Information',
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'images',
      title: 'Images',
    },
    {
      name: 'technical',
      title: 'Technical Details',
    },
    {
      name: 'publishing',
      title: 'Publishing',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // -------------------------------------------------------------
    // GROUP: Basic Information
    // -------------------------------------------------------------
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      group: 'basic',
      description: 'The primary headline for this project (e.g. Tea Kettle – Acrylic LED 3D Signage).',
      placeholder: 'e.g. Tea Kettle – Acrylic LED 3D Signage',
      validation: (rule) => rule.required().error('Project title is required.'),
    }),
    defineField({
      name: 'clientName',
      title: 'Client / Project Name',
      type: 'string',
      group: 'basic',
      description: 'The brand, customer, or business name.',
      placeholder: 'e.g. Tea Kettle',
      validation: (rule) => rule.required().error('Client name is required.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'basic',
      description: 'Choose the portfolio category for this project (e.g. LED Signage, 3D Letters, Storefronts).',
      validation: (rule) => rule.required().error('Please select a category for this project.'),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'basic',
      description: 'Optional site location (e.g. Kannur, Kerala or Commercial Promenade).',
      placeholder: 'e.g. Kozhikode, Kerala',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      description: 'Auto-generated web address link. Click "Generate" to create it automatically from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required. Click "Generate" above to create it.'),
    }),

    // -------------------------------------------------------------
    // GROUP: Content
    // -------------------------------------------------------------
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'A short summary shown on portfolio cards and teaser overviews.',
      placeholder: 'e.g. Custom-designed circular illuminated box signage with premium acrylic face, printed graphics, aluminium trim, and internal LED illumination.',
      validation: (rule) => rule.required().error('Short description is required for portfolio cards.'),
    }),
    defineField({
      name: 'description',
      title: 'Detailed Description',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet List', value: 'bullet'},
            {title: 'Numbered List', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) =>
                      rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        }),
      ],
      description: 'Detailed description for the full project presentation page.',
    }),

    // -------------------------------------------------------------
    // GROUP: Images
    // -------------------------------------------------------------
    defineField({
      name: 'mainImage',
      title: 'Main Project Image',
      type: 'image',
      group: 'images',
      description: 'The primary photograph representing this project on portfolio cards and at the top of the project detail page.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'A brief description of this photo for search engines and accessibility (e.g. "Tea Kettle illuminated round signage installed on storefront").',
          placeholder: 'e.g. Tea Kettle illuminated round signage installed on storefront',
        }),
      ],
      validation: (rule) => rule.required().error('Please upload a main project image.'),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      group: 'images',
      description: 'Upload additional photos of this completed project. You can add multiple images showing different angles, day/night lighting, and fabrication details.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Optional description of this specific photo.',
              placeholder: 'e.g. Close-up view of 3D acrylic letters with aluminium trim',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption shown below this photo.',
              placeholder: 'e.g. Night illumination angle',
            }),
          ],
          preview: {
            select: {
              media: '',
              alt: 'alt',
              caption: 'caption',
            },
            prepare({alt, caption, media}) {
              return {
                title: caption || alt || 'Project Photo',
                subtitle: caption && alt ? alt : undefined,
                media,
              }
            },
          },
        }),
      ],
    }),

    // -------------------------------------------------------------
    // GROUP: Technical Details
    // -------------------------------------------------------------
    defineField({
      name: 'engineeringSpecs',
      title: 'Engineering & Specs',
      type: 'array',
      group: 'technical',
      description: 'Add key engineering specifications row-by-row (e.g. Signage Type, Framework, Letter Projection).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'specItem',
          title: 'Specification',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. Signage Type, Structure, Face Finish, Lighting, Projection',
              placeholder: 'e.g. Signage Type',
              validation: (rule) => rule.required().error('Label is required.'),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g. Round 3D Box Signage, 25 × 25 mm MS square pipe single frame',
              placeholder: 'e.g. Round 3D Box Signage',
              validation: (rule) => rule.required().error('Value is required.'),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'New Specification',
                subtitle: subtitle || 'Enter a value...',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'frameworkStructure',
      title: 'Framework / Structure',
      type: 'array',
      group: 'technical',
      description: 'Structural framing details, mounting subframes, wall anchors, and wind load engineering.',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'lightingPower',
      title: 'Lighting & Power',
      type: 'array',
      group: 'technical',
      description: 'LED module specifications, SMPS power supplies, driver ratings, and illumination style.',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'materials',
      title: 'Materials Used',
      type: 'array',
      group: 'technical',
      description: 'Add materials one-by-one (e.g. Premium Cast Acrylic, Aluminium Box Trim, MS Square Pipe, ADS 1.5W LEDs).',
      of: [
        defineArrayMember({
          type: 'string',
          title: 'Material Name',
          validation: (rule) => rule.required().error('Material name cannot be blank.'),
        }),
      ],
    }),

    // -------------------------------------------------------------
    // GROUP: Publishing
    // -------------------------------------------------------------
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      group: 'publishing',
      initialValue: false,
      description: 'Show this project in the website\'s Featured Work section on the homepage.',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'publishing',
      description: 'Optional number used to control the order of projects on the website. Lower numbers appear first (e.g. 1, 2, 3).',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      group: 'publishing',
      initialValue: true,
      description: 'Controls whether this project is visible on the public website. Turn off to hide it without deleting.',
    }),

    // -------------------------------------------------------------
    // GROUP: SEO
    // -------------------------------------------------------------
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Optional custom title used for search engines and browser tabs (falls back to Project Title if left blank).',
      placeholder: 'e.g. Tea Kettle Acrylic LED 3D Signage | White Edge Signages',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Optional custom description used for search engines (falls back to Short Description if left blank).',
      placeholder: 'e.g. Explore our custom round illuminated box signage manufactured for Tea Kettle...',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      categoryName: 'category.name',
      media: 'mainImage',
      featured: 'featured',
      published: 'published',
    },
    prepare({title, client, categoryName, media, featured, published}) {
      const parts = []
      if (client) parts.push(client)
      if (categoryName) parts.push(categoryName)
      if (featured) parts.push('★ Featured')
      if (published === false) parts.push('🚫 Hidden')

      return {
        title: title || 'Untitled Project',
        subtitle: parts.length > 0 ? parts.join(' • ') : 'No details entered',
        media,
      }
    },
  },
})
