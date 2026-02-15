import Logo from './Logo';
import HabitsList from './HabitsList';
import AddHabit from './AddHabit';
import TrackHabitsList from './TrackHabitsList';

export default function App() {
  return (
    <div className="container">
      <Logo />
      <div className="flex">
        <div className="sidebar">
          <HabitsList />
          <AddHabit />
        </div>
        <TrackHabitsList />
      </div>
    </div>
  );
}
