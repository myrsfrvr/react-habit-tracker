export default function AddHabit() {
  return (
    <form className="form-add-habit">
      <label>Habit title</label>
      <input type="text"></input>

      <label>Habit description</label>
      <input type="text"></input>

      <button className="button button--add">Add habit</button>
    </form>
  );
}
