export type Topic = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "web" | "palette" | "sparkles" | "cpu" | "shield";
};

export const topics: Topic[] = [
  { id: "programovani", title: "Programování", description: "Proměň nápady v přesné instrukce.", icon: "code" },
  { id: "web", title: "Web", description: "Tvoř stránky, které fungují všude.", icon: "web" },
  { id: "grafika", title: "Grafika", description: "Poznej pixely, barvy a obraz.", icon: "palette" },
  { id: "ai", title: "Umělá inteligence", description: "Rozuměj schopnostem i limitům AI.", icon: "sparkles" },
  { id: "hardware", title: "Hardware", description: "Zjisti, co se děje uvnitř počítače.", icon: "cpu" },
  { id: "bezpecnost", title: "Bezpečnost", description: "Chraň sebe i své digitální věci.", icon: "shield" },
];
