import type { Module, Lesson } from "./schema";
import greetingsAndRespect from "./modules/greetings-and-respect.json";

const modules: Module[] = [greetingsAndRespect as Module];

export function getAllModules(): Module[] {
  return modules;
}

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

export function getLesson(
  moduleId: string,
  lessonId: string,
): Lesson | undefined {
  const mod = getModule(moduleId);
  if (!mod) return undefined;
  return mod.lessons.find((l) => l.lesson_id === lessonId);
}
