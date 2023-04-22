import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APILeftSidebar from "../../ui/api/left-sidebar";

export default function APIPsychicSessionPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }, [location.hash]);

  return (
    <div className="page api psychic-session">
      <APILeftSidebar expanded={["psychic-session"]} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicSession</h1>

          <p></p>

          <h2>Properties</h2>
          <nav>
            <a href="/api/psychic-session#res">#res</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="/api/psychic-session#constructor">#constructor</a>
            <a href="/api/psychic-session#cookie">#cookie</a>
            <a href="/api/psychic-session#setCookie">#setCookie</a>
            <a href="/api/psychic-session#daysToMilliseconds">
              #daysToMilliseconds
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
