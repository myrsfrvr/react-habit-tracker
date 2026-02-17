import { LuCircle } from 'react-icons/lu';
import { LuCircleCheck } from 'react-icons/lu';
import { LuCircleX } from 'react-icons/lu';

export default function TrackHabit({ habit }) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="track-habit">
      <p className="habit-description">
        <span>{habit.title}:</span> {habit.description}
      </p>
      <div className="days">
        {days.map(day => (
          <p key={day}>{day}</p>
        ))}
      </div>
      <div className="check-list">
        {habit.checkList.map(el => {
          if (el === 'check')
            return <LuCircleCheck className="icon icon-check" />;
          else if (el === 'x') return <LuCircleX className="icon icon-x" />;
          else return <LuCircle className="icon icon-empty" />;
        })}
        {/* <LuCircleX className="icon icon-x" />
        <LuCircleCheck className="icon icon-check" />
        <LuCircleX className="icon icon-x" />
        <LuCircleCheck className="icon icon-check" />
        <LuCircle className="icon icon-empty" />
        <LuCircle className="icon icon-empty" />
        <LuCircle className="icon icon-empty" /> */}
      </div>
    </div>
  );
}
