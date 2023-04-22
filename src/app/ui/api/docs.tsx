import { NavLink } from "react-router-dom";

export default function APIDocs() {
  return (
    <div className="docs api">
      <div className="docs-content">
        <h1>API Docs</h1>

        <p>
          Welcome to the psychic api docs. These docs contain an anatomic
          description of the public methods and getters of each of the exported
          members of the psychic library. These docs may be too low-level for
          some, in which case we recommend following the{" "}
          <NavLink to="/guides">guides</NavLink> page for an overarching guide
          to using the psychic framework.
        </p>

        <p>Select a member below to discover its underlying api</p>

        <nav>
          <NavLink to="/api/psychic-controller">PsychicController</NavLink>
          <NavLink to="/api/psychic-model">PsychicModel</NavLink>
          <NavLink to="/api/psychic-serializer">PsychicSerializer</NavLink>
        </nav>
      </div>
    </div>
  );
}
