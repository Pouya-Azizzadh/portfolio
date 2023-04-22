import { useState } from "react";

// components
import { Navbar, AboutMe, WorkExperience, Project, Footer } from "./components";

// images

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="padingX bg-dark">
      <Navbar
        items={[
          { href: "#about", title: "About me" },
          { href: "#project", title: "Project" },
          { href: "#experiences", title: "Experiences" },
        ]}
      />
      <div className=" md:px-[140px] px-6">
        <AboutMe />
        <WorkExperience />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
