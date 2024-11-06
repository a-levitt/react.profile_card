import './App.css';
import Avatar from "./components/Avatar.jsx";
import Intro from "./components/Intro.jsx";
import SkillList from "./components/SkillList.jsx";

function App() {

  return (
      <>
          <div className="card">
              <Avatar/>
              <div className="data">
                  <Intro/>
                  {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                  <SkillList/>
              </div>
          </div>
      </>
  )
}

export default App
