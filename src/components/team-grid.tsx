import { Img } from "@/components/img";
import { team, teamNote } from "@/data/content";

/** Offsets that step the three portraits down the row so it does not read as a card grid. */
const steps = ["", "md:mt-16", "md:mt-32"];

/** The three fictional team members. */
export function TeamGrid() {
  return (
    <>
      <ul className="grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
        {team.map((m, i) => (
          <li key={m.name} className={`reveal group ${steps[i] ?? ""}`}>
            <div className="media">
              <Img
                id={m.image}
                alt={m.alt}
                sizes="(min-width: 768px) 30vw, 92vw"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="mt-6 text-[1.7rem] font-semibold tracking-[-0.03em]">{m.name}</h3>
            <p className="font-medium text-accent">{m.role}</p>
            <p className="mt-3 text-muted">{m.bio}</p>
            <p className="mt-3 text-sm font-semibold">{m.focus}</p>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-[60ch] text-sm text-muted md:mt-16">{teamNote}</p>
    </>
  );
}
