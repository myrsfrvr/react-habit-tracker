export default function Logo() {
  const date = new Date().toDateString();

  return (
    <header className="logo">
      <h1>HabitTracker</h1>
      <p>{date}</p>
    </header>
  );
}
