import { LuCircle } from 'react-icons/lu';
import { LuCircleCheck } from 'react-icons/lu';
import { LuCircleX } from 'react-icons/lu';

export default function TrackHabit() {
  return (
    <div className="track-habit">
      <p className="habit-description">
        <span>early bird:</span> wake up at 6 a.m.
      </p>
      <div className="days">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
      <div className="check-list">
        <LuCircleX className="icon icon-x" />
        <LuCircleCheck className="icon icon-check" />
        <LuCircleX className="icon icon-x" />
        <LuCircleCheck className="icon icon-check" />
        <LuCircle className="icon icon-empty" />
        <LuCircle className="icon icon-empty" />
        <LuCircle className="icon icon-empty" />
      </div>
    </div>
  );
}
