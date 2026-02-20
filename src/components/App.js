import Logo from './Logo';
import HabitsList from './HabitsList';
import AddHabit from './AddHabit';
import TrackHabitsList from './TrackHabitsList';
import { useState } from 'react';

const initialHabits = [
  {
    id: 5678,
    title: 'early bird',
    description: 'wake up at 6 a.m.',
    checkList: ['check', 'empty', 'check', 'empty', 'empty', 'empty', 'empty'],
  },
  {
    id: 2345,
    title: "runner's feet",
    description: 'run for at least 20 min',
    checkList: ['empty', 'empty', 'check', 'empty', 'empty', 'empty', 'empty'],
  },
  {
    id: 8943,
    title: 'world lover',
    description: 'practice new language',
    checkList: ['empty', 'check', 'check', 'check', 'empty', 'empty', 'empty'],
  },
];

export default function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [showAddHabit, setShowAddHabit] = useState(false);

  function handleDeleteHabit(id) {
    setHabits(habits => habits.filter(habit => habit.id !== id));
  }

  function handleAddHabit(habit) {
    setHabits(habits => [...habits, habit]);
    setShowAddHabit(false);
  }

  function handleToggleHabit(id, dayIndex) {
    setHabits(habits =>
      habits.map(habit => {
        if (habit.id !== id) return habit;

        let newCheckList = [...habit.checkList];

        newCheckList[dayIndex] =
          newCheckList[dayIndex] === 'check' ? 'empty' : 'check';
        return {
          ...habit,
          checkList: newCheckList,
        };
      }),
    );
  }

  return (
    <div className="container">
      <Logo />
      <div className="flex">
        <div className="sidebar">
          <HabitsList habits={habits} onDeleteHabit={handleDeleteHabit} />
          {showAddHabit && <AddHabit onAddHabit={handleAddHabit} />}
          <button
            className="button"
            onClick={() => setShowAddHabit(!showAddHabit)}
          >
            {showAddHabit ? 'Close' : 'Add new habit'}
          </button>
        </div>
        <TrackHabitsList habits={habits} onToggleHabit={handleToggleHabit} />
      </div>
    </div>
  );
}
