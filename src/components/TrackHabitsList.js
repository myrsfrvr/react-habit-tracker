import TrackHabit from './TrackHabit';

export default function TrackHabitsList({ habits }) {
  return (
    <div className="track-list">
      {habits.map(habit => (
        <TrackHabit habit={habit} key={habit.id} />
      ))}
    </div>
  );
}
