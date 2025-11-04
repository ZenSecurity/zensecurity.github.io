import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    badge: z.string().optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({ schema: projectSchema });

const aboutSchema = z.object({
    title: z.string(),
});

export type AboutSchema = z.infer<typeof aboutSchema>;

const aboutCollection = defineCollection({ schema: aboutSchema });

const workSchema = z.object({
    title: z.string(),
});

export type WorkSchema = z.infer<typeof workSchema>;

const workCollection = defineCollection({ schema: workSchema });

export const collections = {
    'services': projectCollection,
    'about': aboutCollection,
    'experience': workCollection
}