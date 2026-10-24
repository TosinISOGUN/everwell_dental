import { Plus } from "@phosphor-icons/react";

type Item = { q: string; a: string };

/** Accordion on native <details>, so keyboard and screen reader behavior is built in. */
export function Faq({ items, className }: { items: readonly Item[]; className?: string }) {
  return (
    <div className={`faq border-t border-line ${className ?? ""}`}>
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            <span>{item.q}</span>
            <Plus size={22} className="faq-icon text-accent" aria-hidden />
          </summary>
          <p className="faq-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
