import TrackHabit from './TrackHabit';

export default function TrackHabitsList({ habits, onToggleHabit }) {
  return (
    <div className="track-list">
      {habits.map(habit => (
        <TrackHabit
          habit={habit}
          key={habit.id}
          onToggleHabit={onToggleHabit}
        />
      ))}
    </div>
  );
}
