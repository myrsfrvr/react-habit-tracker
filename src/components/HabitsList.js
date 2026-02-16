import Habit from './Habit';

export default function HabitsList({ habits }) {
  return (
    <div className="habits-list">
      <h2>Habits</h2>
      <div className="habits">
        {habits.map(habit => (
          <Habit title={habit.title} key={habit.id} />
        ))}
      </div>
    </div>
  );
}
