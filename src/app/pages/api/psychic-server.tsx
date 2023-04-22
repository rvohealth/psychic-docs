import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APILeftSidebar from "../../ui/api/left-sidebar";

export default function APIPsychicServerPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }, [location.hash]);

  return (
    <div className="page api psychic-router">
      <APILeftSidebar expanded={["psychic-router"]} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicServer</h1>

          <p></p>

          <h2>Properties</h2>
          <nav>
            <a href="/api/psychic-server#app">#app</a>
            <a href="/api/psychic-server#cable">#cable</a>
            <a href="/api/psychic-server#config">#config</a>
            <a href="/api/psychic-server#booted">#booted</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="/api/psychic-server#constructor">#constructor</a>
            <a href="/api/psychic-server#routes">#routes</a>
            <a href="/api/psychic-server#boot">#boot</a>
            <a href="/api/psychic-server#start">#start</a>
            <a href="/api/psychic-server#buildApp">#buildApp</a>
            <a href="/api/psychic-server#buildRoutes">#buildRoutes</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
