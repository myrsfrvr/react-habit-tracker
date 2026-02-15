import { LuLeaf } from 'react-icons/lu';
import { LuTrash2 } from 'react-icons/lu';

export default function Habit() {
  return (
    <div className="habit">
      <div>
        <LuLeaf />
        <p>early bird</p>
      </div>
      <LuTrash2 />
    </div>
  );
}
