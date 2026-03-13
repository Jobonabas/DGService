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
        }),
        defineField({
            name: "description",
            title: "Beschreibung",
            type: "text",
        }),
        defineField({
            name: "category",
            title: "Kategorie",
            type: "string",
            options: {
                list: [
                    { title: "Gartenpflege", value: "gartenpflege" },
                    { title: "Winterdienst", value: "winterdienst" },
                    { title: "Gebäudereinigung", value: "gebaeudereinigung" },
                    { title: "Hausmeisterservice", value: "hausmeisterservice" }
                ],
                layout: "dropdown"
            }
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
          ]
        })
    ]
});