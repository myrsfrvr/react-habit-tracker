import Habit from './Habit';

export default function HabitsList() {
  return (
    <div>
      <h2>Habits</h2>
      <div className="habits-list">
        <Habit />
        <Habit />
        <Habit />
      </div>

      <button className="button">Add new habit</button>
    </div>
  );
}
