import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  return (
    <div>
      <Header />

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          practiceCount={practiceCount}
          setPracticeCount={setPracticeCount}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;