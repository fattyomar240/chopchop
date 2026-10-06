interface Area {
  name: string;
  time: number ;
}

const areas: Area[] = [
  { name: "SerreKunda", time: 25 },
  { name: "Bakau", time: 30 },
  { name: "Kololi", time: 30 },
  { name: "Brusubi", time: 40 },
  { name: "Banjul", time: 45 },
  { name: "Lamin", time: 45 },
];

 function Areas() {
  return (
    <section id="areas" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">Where we deliver</h2>
        <p className="mt-3 max-w-prose text-lg">
          Typical time from the kitchen to your gate. Lamin and Banjul open at lunch and dinner only.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li key={area.name} className="rounded-lg border border-line px-5 py-4">
              {area.name} <span className="float-right text-ink-3">{area.time} min</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Areas
