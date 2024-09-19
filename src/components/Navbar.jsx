export default function Navbar() {
  return (
    <nav>
      <div className="bg-black flex items-center justify-between p-5">
        <div className="text-orange-600 font-bold text-3xl ">Kritika</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
        </ul>
        <button className="bg-orange-600 rounded-md">Contact Me</button>
      </div>
    </nav>
  );
}
