import Habit from './Habit';

export default function HabitsList() {
  return (
    <div>
      <h2>Habits</h2>
      <Habit />
      <Habit />
      <Habit />

      <button>Add new habit</button>
    </div>
  );
}
