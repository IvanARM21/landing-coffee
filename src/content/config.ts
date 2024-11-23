import { defineCollection, z } from "astro:content";

const drink = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        image: z.string(),
        ingredients: z.array(z.string()),
        serving_size: z.string(),
        strength: z.string(),
        flavor_profile: z.array(z.string())
    })
})

export const collection = { drink };