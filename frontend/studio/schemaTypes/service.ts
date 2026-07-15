import { defineType, defineField } from "sanity";


export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Gartenpflege", value: "gartenpflege" },
          { title: "Winterservice", value: "winterservice" },
          { title: "Gebäudereinigung", value: "gebaeudereinigung" },
          { title: "Hausmeisterservice", value: "hausmeisterservice" },
          { title: "Über mich", value: "übermich" }
        ],
        layout: "dropdown"
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string"
            }
          ]
        }
      ],
      validation: (Rule) => Rule.min(1)
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "images.0"
    }
  }
});