export default function Button({ text, onclick }) {
  return (
    <button onClick={onclick} className="bg-black text-white rounded-md p-2">
      {text}
    </button>
  );
}
