import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APILeftSidebar from "../../ui/api/left-sidebar";
import CodeExample from "../../ui/code-example";

export default function APIPsychicModelPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }, [location.hash]);

  return (
    <div className="page api psychic-model">
      <APILeftSidebar expanded={["psychic-model"]} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicModel</h1>

          <p>
            The PsychicModel class represents the <i>M</i> in the <i>MVC</i>{" "}
            pattern. Any class&nbsp; extending a PsychicModel should live in the{" "}
            <span className="hl">app/models</span>&nbsp; folder.
          </p>

          <p>
            Since PsychicModel is a light wrapper on top of
            sequelize-typescript, it is recommended that&nbsp; you visit their
            documentation site for a full list of all they support. Our
            documentation will primarily cover&nbsp; things which are not part
            of the core sequelize-typescript API.
          </p>

          <h2>Static Properties</h2>
          <nav>
            <a href="#modelKey">.modelKey</a>
            <a href="#modelPath">.modelPath</a>
            <a href="#isPsychicModelClass">.isPsychicModelClass</a>
          </nav>

          <h2>Static Methods</h2>
          <nav>
            <a href="#all">.all</a>
            <a href="#first">.first</a>
            <a href="#last">.last</a>
            <a href="#where">.where</a>
            <a href="#background">.background</a>
          </nav>

          <h2>Properties</h2>
          <nav>
            <a href="#isPsychicModelInstance">#isPsychicModelInstance</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#background">background</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
