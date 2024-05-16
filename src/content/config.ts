import { defineCollection, reference, z } from 'astro:content';

// Staff collection schema
const staff = defineCollection({
    // type: 'data',
    schema: z.object({
        id: z.string().optional(),
        date: z.date(),
        username: z.string(),
        function: z.enum(["boardmember", "advisor"]).default("boardmember"),
        title: z.string().optional(),
        phonenumber: z.string().optional(),
        email: z.string().email().optional(),
        image: z.string().optional(),
        bgImage: z.string().optional(),
        description: z.string().optional(),
        social: z
        .object({
            facebook: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            youtube: z.string().url().optional(),
            twitter: z.string().optional(),
            instagram: z.string().optional(),
        })
        .optional(),
    }),
});

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.enum(["published", "archived"]).optional(),
        author: reference('staff'),
        category: z.string().optional(),
        image: z.string().optional(),
        title: z.string(),
        subtitle: z.string().optional(),
        seo: z
        .object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
        icon: z.string().optional().default('home'),
        pack: z.string().optional().default('mdi'),
        shortTitle: z.string().optional(),
        index: z.number().optional(),
        tags: z.array(z.string()).optional(),
    })
});

const linkcasts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        category: z.string().optional(),
        image: z.string().optional(),
        imageRatio: z.string().optional(),
        date: z.date().optional(),
        url: z.string().optional(),
        seo: z
        .object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
    })
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        initiator: z.array(reference('partners')),
        projects: z.array(z.string()).optional(),
        date: z.date().optional(),
        title: z.string(),
        image: z.string().optional(),
        goal: z.number().optional(),
        subtitle: z.string().optional(),
        startDate: z.date().default(new Date()),
        endDate: z.date().optional(),
        status: z.enum(["published", "archived"]).optional(),
        tags: z.array(z.string()).optional(),
        images: z.array(z.string()).optional(),
        seo:
        z.object({
            description: z.string().optional(),
            imageAlt: z.string().optional(),
            seoTitle: z.string().optional(),
            callToAction: z.string().optional(),
        })
        .optional(),
        icon: z.string().optional(),
        pack: z.string().optional(),
        shortTitle: z.string().optional(),
    })
});

export const collections = { pages, staff, projects }
