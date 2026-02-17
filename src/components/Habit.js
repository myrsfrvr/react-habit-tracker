import { LuLeaf } from 'react-icons/lu';
import { LuTrash2 } from 'react-icons/lu';

export default function Habit({ habit, onDeleteHabit }) {
  return (
    <div className="habit">
      <div>
        <LuLeaf />
        <p>{habit.title}</p>
      </div>
      <button className="button-delete" onClick={() => onDeleteHabit(habit.id)}>
        <LuTrash2 className="icon-trash" />
      </button>
    </div>
  );
}
