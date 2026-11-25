import { getCollection } from "astro:content";

export type TopicId = "programovani" | "web" | "grafika" | "ai" | "hardware" | "bezpecnost";
export type DifficultyId = "zacatecnik" | "mirne-pokrocily" | "pokrocily";
export type ContentIcon = "code" | "web" | "palette" | "sparkles" | "cpu" | "shield" | "trophy" | "book" | "flask" | "robot" | "binary";
export type ContentKind = "courses" | "articles" | "tutorials" | "quizzes" | "challenges" | "experiments" | "workshops";

export interface ContentCardData {
  title: string;
  description: string;
  topic: TopicId;
  difficulty: DifficultyId;
  durationMinutes: number;
  ageMin: number;
  tags: string[];
  cover?: string | undefined;
  coverAlt?: string | undefined;
}

export interface CardItem {
  title: string;
  description: string;
  href: string;
  typeId: ContentKind;
  type: string;
  topic: TopicId;
  topicLabel: string;
  duration: number;
  difficulty: string;
  difficultyId: DifficultyId;
  age: number;
  tags: string[];
  icon: ContentIcon;
  cover?: string | undefined;
  coverAlt?: string | undefined;
}

const typeLabels: Record<ContentKind, string> = {
  courses: "Kurz",
  articles: "Článek",
  tutorials: "Návod",
  quizzes: "Kvíz",
  challenges: "Výzva",
  experiments: "Experiment",
  workshops: "Workshop",
};
const paths: Record<ContentKind, string> = {
  courses: "/kurzy",
  articles: "/clanky",
  tutorials: "/navody",
  quizzes: "/kvizy",
  challenges: "/vyzvy",
  experiments: "/laborator",
  workshops: "/workshopy",
};
export const topicLabels: Record<TopicId, string> = {
  programovani: "Programování",
  web: "Web",
  grafika: "Grafika",
  ai: "Umělá inteligence",
  hardware: "Hardware",
  bezpecnost: "Bezpečnost",
};
export const difficultyLabels: Record<DifficultyId, string> = {
  zacatecnik: "Začátečník",
  "mirne-pokrocily": "Mírně pokročilý",
  pokrocily: "Pokročilý",
};
const icons: Record<TopicId, ContentIcon> = {
  programovani: "code",
  web: "web",
  grafika: "palette",
  ai: "sparkles",
  hardware: "cpu",
  bezpecnost: "shield",
};
const courseOrder = ["vyzkousej-si-python", "tvorba-vlastniho-webu", "objevujeme-ai"];

export function sortCourses<T extends { id: string }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const first = courseOrder.indexOf(a.id);
    const second = courseOrder.indexOf(b.id);
    return (first < 0 ? Number.MAX_SAFE_INTEGER : first) - (second < 0 ? Number.MAX_SAFE_INTEGER : second);
  });
}

export function relatedContent(items: CardItem[], current: CardItem, limit = 3): CardItem[] {
  const tags = new Set(current.tags);
  const seen = new Set([current.href]);
  return items
    .map((item, index) => ({
      item,
      index,
      score: (item.topic === current.topic ? 2 : 0) + item.tags.filter((tag) => tags.has(tag)).length,
    }))
    .filter(({ item, score }) => score > 0 && !seen.has(item.href))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function toCardItem(entry: { id: string; data: ContentCardData }, kind: ContentKind): CardItem {
  return {
    title: entry.data.title,
    description: entry.data.description,
    href: `${paths[kind]}/${entry.id}/`,
    typeId: kind,
    type: typeLabels[kind],
    topic: entry.data.topic,
    topicLabel: topicLabels[entry.data.topic],
    duration: entry.data.durationMinutes,
    difficulty: difficultyLabels[entry.data.difficulty],
    difficultyId: entry.data.difficulty,
    age: entry.data.ageMin,
    tags: entry.data.tags,
    icon: icons[entry.data.topic],
    cover: entry.data.cover,
    coverAlt: entry.data.coverAlt,
  };
}

export function publicEntries<T extends { data: { draft: boolean } }>(entries: T[]): T[] {
  return entries.filter((entry) => !entry.data.draft);
}

export async function allCardItems(): Promise<CardItem[]> {
  const [courses, articles, tutorials, quizzes, challenges, experiments, workshops] = await Promise.all([
    getCollection("courses"),
    getCollection("articles"),
    getCollection("tutorials"),
    getCollection("quizzes"),
    getCollection("challenges"),
    getCollection("experiments"),
    getCollection("workshops"),
  ]);
  return [
    ...sortCourses(publicEntries(courses)).map((entry) => toCardItem(entry, "courses")),
    ...publicEntries(articles).map((entry) => toCardItem(entry, "articles")),
    ...publicEntries(tutorials).map((entry) => toCardItem(entry, "tutorials")),
    ...publicEntries(quizzes).map((entry) => toCardItem(entry, "quizzes")),
    ...publicEntries(challenges).map((entry) => toCardItem(entry, "challenges")),
    ...publicEntries(experiments).map((entry) => toCardItem(entry, "experiments")),
    ...publicEntries(workshops).map((entry) => toCardItem(entry, "workshops")),
  ];
}
