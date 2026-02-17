import { useState } from 'react';

export default function AddHabit({ onAddHabit }) {
  const [habitTitle, setHabitTitle] = useState('');
  const [habitDescription, setHabitDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!habitTitle || !habitDescription) return;

    const id = crypto.randomUUID();
    onAddHabit({
      id,
      title: habitTitle,
      description: habitDescription,
      checkList: [
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
        'empty',
      ],
    });

    setHabitTitle('');
    setHabitDescription('');
  }

  return (
    <form className="form-add-habit" onSubmit={handleSubmit}>
      <label>Habit title</label>
      <input
        type="text"
        value={habitTitle}
        onChange={e => setHabitTitle(e.target.value)}
      ></input>

      <label>Habit description</label>
      <input
        type="text"
        value={habitDescription}
        onChange={e => setHabitDescription(e.target.value)}
      ></input>

      <button className="button button--add">Add habit</button>
    </form>
  );
}
