import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="container grid">
      <PersonalInfo />
      {/* <Skills />
      <Hobbies /> */}
      <Blog />
    </div>
  );
}

export default App;
