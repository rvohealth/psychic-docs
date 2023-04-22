import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APILeftSidebar from "../../ui/api/left-sidebar";

export default function APIPsychicSerializerPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }, [location.hash]);

  return (
    <div className="page api psychic-serializer">
      <APILeftSidebar expanded={["psychic-serializer"]} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicSerializer</h1>

          <p>
            The PsychicSerializer class represents the <i>V</i> in the{" "}
            <i>MVC</i> pattern. Any class&nbsp; extending a PsychicSerializer
            should live in the <span className="hl">app/serializers</span>&nbsp;
            folder.
          </p>

          <h2>Static Methods</h2>
          <nav>
            <a href="#attribute">.attribute</a>
            <a href="#attributes">.attributes</a>
          </nav>

          <h2>Properties</h2>
          <nav>
            <a href="#data">#data</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#constructor">#constructor</a>
            <a href="#render">#render</a>
            <a href="#renderMany">#renderMany</a>
            <a href="#renderOne">#renderOne</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
