import AnimatedBackground from "./components/Background/Animationbackground";
import Card from "./components/Card/CardComponent";
import Home from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <AnimatedBackground></AnimatedBackground>
        <Home></Home>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
