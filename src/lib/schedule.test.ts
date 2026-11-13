import { describe, expect, it } from "vitest";
import { programs } from "@/content/site";
import { buildTimetable, formatDays, todayInLisbon } from "./schedule";

describe("buildTimetable", () => {
  const timetable = buildTimetable(programs);

  it("lists only days that have classes, in week order", () => {
    expect(timetable.days).toEqual(["seg", "ter", "qua", "qui", "sex"]);
  });

  it("sorts time slots from earliest to latest", () => {
    expect(timetable.slots.map((slot) => slot.start)).toEqual([
      "19:00",
      "20:00",
    ]);
  });

  it("places each program in the right slot", () => {
    const [kids, adults] = timetable.slots;
    expect(kids?.entries.seg?.id).toBe("kids");
    expect(kids?.entries.ter?.id).toBe("infantil");
    expect(adults?.entries.seg?.id).toBe("adultos-avancados");
    expect(adults?.entries.ter?.id).toBe("adultos-iniciantes");
  });

  it("orders each day's classes by time", () => {
    const monday = timetable.byDay.find(({ day }) => day === "seg");
    expect(monday?.entries.map((entry) => entry.program.id)).toEqual([
      "kids",
      "adultos-avancados",
    ]);
  });
});

describe("formatDays", () => {
  it("joins days in Portuguese", () => {
    expect(formatDays(["seg", "qua", "sex"])).toBe("Segunda, quarta e sexta");
    expect(formatDays(["ter", "qui"])).toBe("Terça e quinta");
    expect(formatDays(["sab"])).toBe("Sábado");
  });
});

describe("todayInLisbon", () => {
  it("uses Lisbon time, not the visitor's", () => {
    // 23:30 UTC on a Monday is still Monday in Lisbon during winter.
    expect(todayInLisbon(new Date("2026-11-02T23:30:00Z"))).toBe("seg");
    // 23:30 UTC on a summer Monday is already Tuesday in Lisbon (UTC+1).
    expect(todayInLisbon(new Date("2026-07-06T23:30:00Z"))).toBe("ter");
  });
});
