import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string().optional(),
    category: z.enum(['bread', 'pastry', 'special']),
    stripeUrl: z.string().url(), // Your $0-fee payment link
  }),
});

export const collections = { products };
