import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APILeftSidebar from "../../ui/api/left-sidebar";

export default function APIPsychicRouterPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }, [location.hash]);

  return (
    <div className="page api psychic-router">
      <APILeftSidebar expanded={["psychic-router"]} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicRouter</h1>

          <p></p>

          <h2>Properties</h2>
          <nav>
            <a href="#app">app</a>
            <a href="#config">config</a>
          </nav>

          <h2>Getters</h2>
          <nav>
            <a href="#routingMechanism">routingMechanism</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#constructor">#constructor</a>
            <a href="/api/psychic-router#constructor">#constructor</a>
            <a href="/api/psychic-router#get">#get</a>
            <a href="/api/psychic-router#post">#post</a>
            <a href="/api/psychic-router#put">#put</a>
            <a href="/api/psychic-router#patch">#patch</a>
            <a href="/api/psychic-router#delete">#delete</a>
            <a href="/api/psychic-router#crud">#crud</a>
            <a href="/api/psychic-router#namespace">#namespace</a>
            <a href="/api/psychic-router#resources">#resources</a>
            <a href="/api/psychic-router#resource">#resource</a>
            <a href="/api/psychic-router#handle">#handle</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
