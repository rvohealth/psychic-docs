import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import APILeftSidebar from "../../ui/api/left-sidebar";
import CodeExample from "../../ui/code-example";

export default function APIPsychicControllerPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  }, [location.hash]);

  return (
    <div className="page api psychic-controller">
      <APILeftSidebar expanded={["psychic-controller"]} />

      <div className="docs api">
        <div className="documentation">
          <h1>PsychicController</h1>

          <p>
            The PsychicController class represents the <i>C</i> in the{" "}
            <i>MVC</i> pattern. Any class&nbsp; extending a PsychicController
            should live in the <span className="hl">app/controllers</span>&nbsp;
            folder, and should have routes pointing to the public method
            definitions you customize upon it.
          </p>

          <p>
            The primary purpose of the PsychicController is to collect params
            from an http request, send them&nbsp; to some underlying service,
            and then render a response. Controller logic shouldn't be too
            expansive,&nbsp; since the nature of each method is to be called by
            a single endpoint, making the methods themselves&nbsp; naturally
            unsharable with other services.
          </p>

          <h2>Properties</h2>
          <nav>
            <a href="#params">params</a>
            <a href="#req">req</a>
            <a href="#res">res</a>
          </nav>

          <h2>Methods</h2>
          <nav>
            <a href="#ok">ok</a>
            <a href="#notFound">notFound</a>
            <a href="#unauthorized">unauthorized</a>
            <a href="#unprocessableEntity">unprocessableEntity</a>
          </nav>

          <h2>Decorators</h2>
          <nav>
            <a href="#before-action">@BeforeAction</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
