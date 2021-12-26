export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        {
            name: 'mainPhoto',
            title: 'Main Photo',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
            source: 'title',
            maxLength: 96,
            },
        },
      
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
    preview: {
        select: {
          title: 'title',
          author: 'author.name',
          media: 'mainImage',
        },
        prepare(selection) {
          const {author} = selection
          return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
          })
        },
      },
    }