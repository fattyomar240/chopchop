type DishBadge = "popular" | "popular" | "spicy" | 'vegetarian'| "breakfast";

interface   PopularDish {
  name: string;
  image: string;
  alt: string;
  kitchen: string;
  price: string;
  badge?: DishBadge;
}

const dishes: PopularDish[] = [
  {
    name: "Benachin",
    image: "/assets/dish-1.svg",
    alt: "Description of the dish",
    kitchen: "Mama Binta's Kitchen . Westfield",
    price: "D 250",
    badge: "popular",
  },
  {
    name: "Domoda",
    image: "/assets/dish-2.svg",
    alt: "Description of the dish",
    kitchen: "Kairaba Corner . Kololi",
    price: "D 200",
    badge: "popular",
  },
  {
    name: "Chicken yassa",
    image: "/assets/dish-3.svg",
    alt: "Description of the dish",
    kitchen: "Senegambia Grill . Kololi",
    price: "D 350",
    badge: "spicy",

  },
  {
    name: "Afra",
    image: "/assets/dish-4.svg",
    alt: "Description of the dish",
    kitchen: "Afra Bantaba . Bakau",
    price: "D400",
    badge: "spicy",


  },
  {
    name: "SuperKanja",
    image: "/assets/dish-5.svg",
    alt: "Description of the dish",
    kitchen: "Aunty Haddy's . SerreKunda",
    price: "D 180",
    badge: "vegetarian",

  },
  {
    name: "Tapalapa and egg",
    image: "/assets/dish-6.svg",
    alt: "Description of the dish",
    kitchen: "Morning Bread . Bakau",
    price: "D 75",
    badge: "breakfast",

  },
];
const addButtonClass =
  "rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition duration-200 hover:border-ink hover:bg-ink hover:text-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop";

const badgeLabels: Record<DishBadge, string> = {
  popular: "Popular",
  vegetarian: "Vegetarian",
  spicy: "Spicy",
  breakfast: "Breakfast",
};

function badgeClass(badge: DishBadge): string {
  const tone =
    badge === "vegetarian"
      ? "bg-leaf-soft text-leaf"
      : "bg-chop-soft text-chop-dark";
  return `shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${tone}`;
}
 function Popular() {
  return (
    <section id="popular" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">Popular this week</h2>
        <p className="mt-3 max-w-prose text-lg">What the Kombos ordered most in the last seven days.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="rounded-xl border border-line bg-surface p-5 transition duration-200 hover:-translate-y-1"
            >
              <img src={dish.image} alt={dish.alt} className="aspect-3/2 w-full object-cover" />
              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink">{dish.name}</h3>
                {dish.badge && <span className={badgeClass(dish.badge)}>{badgeLabels[dish.badge]}</span>}
              </div>
              <p className="text-sm text-ink-3">{dish.kitchen}</p>
              <div className="flex items-center justify-between pt-5">
                <p className="text-lg font-semibold text-ink">{dish.price}</p>
                <button type="button" className={addButtonClass}>
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
