import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const topic = z.enum(["programovani", "web", "grafika", "ai", "hardware", "bezpecnost"]);
const difficulty = z.enum(["zacatecnik", "mirne-pokrocily", "pokrocily"]);
const common = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  topic,
  tags: z.array(z.string()),
  difficulty,
  ageMin: z.number().int().min(10).max(18),
  durationMinutes: z.number().int().positive(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  author: z.string().optional(),
});

const courses = defineCollection({
  loader: glob({ base: "./src/content/courses", pattern: "**/*.md" }),
  schema: common.extend({
    objectives: z.array(z.string()).min(1),
    prerequisites: z.array(z.string()),
    lessons: z.array(z.object({ title: z.string(), description: z.string() })).min(1),
    coursePath: z.string().startsWith("/courses/").optional(),
  }),
});

const articles = defineCollection({ loader: glob({ base: "./src/content/articles", pattern: "**/*.md" }), schema: common });
const tutorials = defineCollection({ loader: glob({ base: "./src/content/tutorials", pattern: "**/*.md" }), schema: common });

const question = z.object({
  id: z.string().min(1),
  prompt: z.string().min(1),
  options: z.array(z.string().min(1)).min(2),
  correctIndex: z.number().int().nonnegative(),
  explanation: z.string().min(1),
}).superRefine((value, context) => {
  if (value.correctIndex >= value.options.length) {
    context.addIssue({ code: "custom", path: ["correctIndex"], message: "Index správné odpovědi musí ukazovat na existující možnost." });
  }
});
const quizzes = defineCollection({
  loader: glob({ base: "./src/content/quizzes", pattern: "**/*.json" }),
  schema: common.extend({ questions: z.array(question).min(1) }).superRefine((value, context) => {
    const ids = value.questions.map((item) => item.id);
    if (new Set(ids).size !== ids.length) context.addIssue({ code: "custom", path: ["questions"], message: "ID otázek musí být v rámci kvízu unikátní." });
  }),
});

const challenges = defineCollection({
  loader: glob({ base: "./src/content/challenges", pattern: "**/*.md" }),
  schema: common.extend({ prompt: z.string().min(1), hint: z.string().min(1), solution: z.string().min(1), extension: z.string().optional() }),
});
const experiments = defineCollection({
  loader: glob({ base: "./src/content/experiments", pattern: "**/*.json" }),
  schema: common.extend({ componentKey: z.enum(["binary", "rgb", "robot"]) }),
});
const links = defineCollection({
  loader: glob({ base: "./src/content/links", pattern: "**/*.json" }),
  schema: common.extend({
    url: z.url().refine((value) => new URL(value).protocol === "https:", "Externí zdroj musí používat HTTPS."),
    provider: z.string().min(1),
    language: z.string().min(2),
  }),
});
const workshops = defineCollection({
  loader: glob({ base: "./src/content/workshops", pattern: "**/*.md" }),
  schema: common.extend({
    status: z.enum(["planned", "open", "closed"]),
    audience: z.string().min(1),
    agenda: z.array(z.object({ duration: z.string(), title: z.string(), description: z.string() })).min(1),
  }),
});

export const collections = { courses, articles, tutorials, quizzes, challenges, experiments, links, workshops };
