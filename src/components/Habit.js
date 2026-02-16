import { LuLeaf } from 'react-icons/lu';
import { LuTrash2 } from 'react-icons/lu';

export default function Habit({ title }) {
  return (
    <div className="habit">
      <div>
        <LuLeaf />
        <p>{title}</p>
      </div>
      <LuTrash2 className="icon-trash" />
    </div>
  );
}
