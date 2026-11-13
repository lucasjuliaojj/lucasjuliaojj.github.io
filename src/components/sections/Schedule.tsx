"use client";

import { useSyncExternalStore } from "react";
import { programs } from "@/content/site";
import {
  buildTimetable,
  DAY_ABBREVIATIONS,
  DAY_NAMES,
  todayInLisbon,
} from "@/lib/schedule";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** "19:00" -> "19h", "19:30" -> "19h30" */
const formatHour = (time: string) =>
  time.replace(":00", "").replace(":", "h") + (time.endsWith(":00") ? "h" : "");

const timetable = buildTimetable(programs);

const subscribe = () => () => {};

export function Schedule() {
  // Null in the static HTML, so it never carries a stale "today".
  const today = useSyncExternalStore(subscribe, todayInLisbon, () => null);

  return (
    <section id="horarios" className="section section--line">
      <div className="container">
        <SectionHeading
          eyebrow="Horários"
          strong="Plano de aulas"
          soft="da semana."
          align="center"
        />

        <div className="timetable" data-reveal>
          <table>
            <caption className="sr-only">Horário semanal das aulas</caption>
            <thead>
              <tr>
                <th scope="col">Hora</th>
                {timetable.days.map((day) => (
                  <th
                    key={day}
                    scope="col"
                    className={day === today ? "is-today" : undefined}
                  >
                    {DAY_NAMES[day]}
                    {day === today && <span className="today-tag">Hoje</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.slots.map((slot) => (
                <tr key={slot.start}>
                  <th scope="row">
                    {slot.start}
                    <span>{slot.end}</span>
                  </th>
                  {timetable.days.map((day) => {
                    const program = slot.entries[day];
                    return (
                      <td
                        key={day}
                        className={day === today ? "is-today" : undefined}
                      >
                        {program ? (
                          <span className="timetable__class">
                            {program.shortName}
                            <small>{program.label}</small>
                          </span>
                        ) : (
                          <span className="sr-only">Sem aula</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="day-list" data-reveal>
          {timetable.byDay.map(({ day, entries }) => (
            <li key={day} className={day === today ? "is-today" : undefined}>
              <h3>
                {DAY_ABBREVIATIONS[day]}
                {day === today && <span className="today-tag">Hoje</span>}
              </h3>
              <ul>
                {entries.map((entry) => (
                  <li key={`${entry.start}-${entry.program.id}`}>
                    <span>{entry.program.shortName}</span>
                    <time>
                      {formatHour(entry.start)}–{formatHour(entry.end)}
                    </time>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
