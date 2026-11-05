import type { Program, Weekday } from "@/content/site";

const WEEK: Weekday[] = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];

export const DAY_NAMES: Record<Weekday, string> = {
  seg: "Segunda",
  ter: "Terça",
  qua: "Quarta",
  qui: "Quinta",
  sex: "Sexta",
  sab: "Sábado",
  dom: "Domingo",
};

export const DAY_ABBREVIATIONS: Record<Weekday, string> = {
  seg: "Seg",
  ter: "Ter",
  qua: "Qua",
  qui: "Qui",
  sex: "Sex",
  sab: "Sáb",
  dom: "Dom",
};

export interface TimetableEntry {
  day: Weekday;
  start: string;
  end: string;
  program: Program;
}

export interface TimetableSlot {
  start: string;
  end: string;
  entries: Partial<Record<Weekday, Program>>;
}

export interface Timetable {
  days: Weekday[];
  slots: TimetableSlot[];
  byDay: { day: Weekday; entries: TimetableEntry[] }[];
}

export function buildTimetable(programs: Program[]): Timetable {
  const entries: TimetableEntry[] = programs.flatMap((program) =>
    program.sessions.flatMap((session) =>
      session.days.map((day) => ({
        day,
        start: session.start,
        end: session.end,
        program,
      })),
    ),
  );

  const days = WEEK.filter((day) => entries.some((e) => e.day === day));

  const slotMap = new Map<string, TimetableSlot>();
  for (const entry of entries) {
    const key = `${entry.start}-${entry.end}`;
    const slot = slotMap.get(key) ?? {
      start: entry.start,
      end: entry.end,
      entries: {},
    };
    slot.entries[entry.day] = entry.program;
    slotMap.set(key, slot);
  }

  return {
    days,
    slots: [...slotMap.values()].sort((a, b) => a.start.localeCompare(b.start)),
    byDay: days.map((day) => ({
      day,
      entries: entries
        .filter((e) => e.day === day)
        .sort((a, b) => a.start.localeCompare(b.start)),
    })),
  };
}

/** "Segunda, quarta e sexta" */
export function formatDays(days: Weekday[]): string {
  const names = days.map((day) => DAY_NAMES[day].toLowerCase());
  const last = names.pop() ?? "";
  const text = names.length > 0 ? `${names.join(", ")} e ${last}` : last;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Today's weekday at the gym, whatever the visitor's time zone is. */
export function todayInLisbon(now: Date = new Date()): Weekday {
  const day = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    timeZone: "Europe/Lisbon",
  }).format(now);
  const map: Record<string, Weekday> = {
    Mon: "seg",
    Tue: "ter",
    Wed: "qua",
    Thu: "qui",
    Fri: "sex",
    Sat: "sab",
    Sun: "dom",
  };
  return map[day] ?? "seg";
}
