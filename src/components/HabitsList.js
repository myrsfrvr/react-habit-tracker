import Habit from './Habit';

export default function HabitsList({ habits, onDeleteHabit }) {
  return (
    <div className="habits-list">
      <h2>Habits</h2>
      <div className="habits">
        {habits.map(habit => (
          <Habit habit={habit} key={habit.id} onDeleteHabit={onDeleteHabit} />
        ))}
      </div>
    </div>
  );
}
