import Habit from './Habit';

export default function HabitsList() {
  return (
    <div className="habits-list">
      <h2>Habits</h2>
      <div className="habits">
        <Habit />
        <Habit />
        <Habit />
      </div>

      <button className="button">Add new habit</button>
    </div>
  );
}
