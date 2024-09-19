import Navbar from "./Navbar";

export default function Kritika() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col justify-center">
        <h2 className="font-bold text-4xl text-gray-500">I'm a</h2>
        <h2 className="font-extrabold text-6xl">Front End</h2>
        <h2 className="font-extrabold text-6xl ">
          Developer <span className="text-orange-600">.</span>{" "}
        </h2>
        <div className="bg-orange-600 w-fit p-2 rounded-md ">Contat Me</div>
      </div>
    </div>
  );
}
