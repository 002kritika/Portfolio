// import Button from "./components/Button";
import AboutMe from "./components/AboutMe";
import Kritika from "./components/Kiritika";
import Skills from "./components/Skills";
import MainLayout from "./layout/MainLayout";

export default function App() {
  // const obj = {
  //   name: "Kritika",
  //   age: 22,
  //   gender: "Female",
  // };

  // const printHi = () => {
  //   console.log("Hiii");
  // };
  // const printHello = () => {
  //   console.log("Hellooo");
  // };
  // const printBye = () => {
  //   console.log("tata");
  // };
  // return (
  //   <div className="bg-slate-300 h-screen flex items-center justify-center ">
  //     <h1 className=" font-bold  hover:bg-purple-400">
  //       hello {obj.name}, she is {obj.age} years
  //       <div className="flex gap-4 justify-center items-center">
  //         <Button text="hii" onclick={printHi} />
  //         <Button text="hello" onclick={printHello} />
  //         <Button text="bye" onclick={printBye} />
  //       </div>
  //     </h1>
  //   </div>
  // );
  return (
    <MainLayout>
      <Kritika />
      <AboutMe />
      <Skills />
    </MainLayout>
  );
}
