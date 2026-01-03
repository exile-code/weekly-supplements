const benefits = [
  "Personalized supplement stacks",
  "Weekly doorstep delivery",
  "No subscriptions traps",
  "Scientifically backed ingredients",
];

export default function Benefits() {
  return (
    <section className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why WeeklySupps?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((item) => (
          <div
            key={item}
            className="p-6 border rounded bg-white"
          >
            ✔ {item}
          </div>
        ))}
      </div>
    </section>
  );
}
