import LeftSidebar from "../left-sidebar";
import { NavLink } from "react-router-dom";
import { MdOutlineArrowDropDown, MdArrowRight } from "react-icons/md";
import { useState } from "react";

export interface APISidebarProps {
  expanded?: string[];
}

export default function APILeftSidebar(props: APISidebarProps = {}) {
  const [expanded, setExpanded] = useState<string[]>(props.expanded || []);

  const toggleExpanded = (val: string) => {
    if (expanded.includes(val)) setExpanded(expanded.filter((e) => e !== val));
    else setExpanded([...expanded, val]);
  };

  return (
    <LeftSidebar mode="api">
      <nav>
        <nav className={expanded.includes("psychic-config") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-config">
              PsychicConfig
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-config");
              }}
            >
              {expanded.includes("psychic-config") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-config#root">#root</NavLink>
          <NavLink to="/api/psychic-config#appPath">#appPath</NavLink>
          <NavLink to="/api/psychic-config#confPath">#confPath</NavLink>
          <NavLink to="/api/psychic-config#dbPath">#dbPath</NavLink>
          <NavLink to="/api/psychic-config#migrationsPath">
            #migrationsPath
          </NavLink>
          <NavLink to="/api/psychic-config#controllersPath">
            #controllersPath
          </NavLink>
          <NavLink to="/api/psychic-config#modelsPath">#modelsPath</NavLink>
          <NavLink to="/api/psychic-config#servicesPath">#servicesPath</NavLink>
          <NavLink to="/api/psychic-config#authSessionKey">
            #authSessionKey
          </NavLink>
          <NavLink to="/api/psychic-config#controllers">#controllers</NavLink>
          <NavLink to="/api/psychic-config#apiOnly">#apiOnly</NavLink>
          <NavLink to="/api/psychic-config#useWs">#useWs</NavLink>
          <NavLink to="/api/psychic-config#useRedis">#useRedis</NavLink>
          <NavLink to="/api/psychic-config#constructor">#constructor</NavLink>
          <NavLink to="/api/psychic-config#boot">#boot</NavLink>
        </nav>

        <nav
          className={expanded.includes("psychic-controller") ? "expanded" : ""}
        >
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-controller">
              PsychicController
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-controller");
              }}
            >
              {expanded.includes("psychic-controller") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-controller#params">#params</NavLink>
          <NavLink to="/api/psychic-controller#req">#req</NavLink>
          <NavLink to="/api/psychic-controller#res">#res</NavLink>
          <NavLink to="/api/psychic-controller#ok">#ok</NavLink>
          <NavLink to="/api/psychic-controller#notFound">#notFound</NavLink>
          <NavLink to="/api/psychic-controller#unauthorized">
            #unauthorized
          </NavLink>
          <NavLink to="/api/psychic-controller#unprocessableEntity">
            #unprocessableEntity
          </NavLink>
        </nav>

        <nav className={expanded.includes("psychic-model") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-model">
              PsychicModel
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-model");
              }}
            >
              {expanded.includes("psychic-model") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-model/sequelize-typescript">
            sequelize-typescript
          </NavLink>
          <NavLink to="/api/psychic-model#modelKey">.modelKey</NavLink>
          <NavLink to="/api/psychic-model#modelPath">.modelPath</NavLink>
          <NavLink to="/api/psychic-model#all">.all</NavLink>
          <NavLink to="/api/psychic-model#first">.first</NavLink>
          <NavLink to="/api/psychic-model#last">.last</NavLink>
          <NavLink to="/api/psychic-model#where">.where</NavLink>
          <NavLink to="/api/psychic-model#background">.background</NavLink>
          <NavLink to="/api/psychic-model#isPsychicModelClass">
            .isPsychicModelClass
          </NavLink>
          <NavLink to="/api/psychic-model#isPsychicModelInstance">
            #isPsychicModelInstance
          </NavLink>
          <NavLink to="/api/psychic-model#background">#background</NavLink>
        </nav>

        <nav
          className={expanded.includes("psychic-serializer") ? "expanded" : ""}
        >
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-serializer">
              PsychicSerializer
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-serializer");
              }}
            >
              {expanded.includes("psychic-serializer") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-serializer#attributes">#attributes</NavLink>
        </nav>

        <nav className={expanded.includes("psychic-router") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-router">
              PsychicRouter
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-router");
              }}
            >
              {expanded.includes("psychic-router") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-router#app">#app</NavLink>
          <NavLink to="/api/psychic-router#config">#config</NavLink>
          <NavLink to="/api/psychic-router#routingMechanism">
            #routingMechanism
          </NavLink>
          <NavLink to="/api/psychic-router#constructor">#constructor</NavLink>
          <NavLink to="/api/psychic-router#get">#get</NavLink>
          <NavLink to="/api/psychic-router#post">#post</NavLink>
          <NavLink to="/api/psychic-router#put">#put</NavLink>
          <NavLink to="/api/psychic-router#patch">#patch</NavLink>
          <NavLink to="/api/psychic-router#delete">#delete</NavLink>
          <NavLink to="/api/psychic-router#crud">#crud</NavLink>
          <NavLink to="/api/psychic-router#namespace">#namespace</NavLink>
          <NavLink to="/api/psychic-router#resources">#resources</NavLink>
          <NavLink to="/api/psychic-router#resource">#resource</NavLink>
          <NavLink to="/api/psychic-router#handle">#handle</NavLink>
        </nav>

        <nav className={expanded.includes("psychic-server") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-server">
              PsychicServer
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-server");
              }}
            >
              {expanded.includes("psychic-server") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-server#app">#app</NavLink>
          <NavLink to="/api/psychic-server#cable">#cable</NavLink>
          <NavLink to="/api/psychic-server#config">#config</NavLink>
          <NavLink to="/api/psychic-server#booted">#booted</NavLink>
          <NavLink to="/api/psychic-server#constructor">#constructor</NavLink>
          <NavLink to="/api/psychic-server#routes">#routes</NavLink>
          <NavLink to="/api/psychic-server#boot">#boot</NavLink>
          <NavLink to="/api/psychic-server#start">#start</NavLink>
          <NavLink to="/api/psychic-server#buildApp">#buildApp</NavLink>
          <NavLink to="/api/psychic-server#buildRoutes">#buildRoutes</NavLink>
        </nav>

        <nav className={expanded.includes("psychic-session") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/psychic-session">
              PsychicSession
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("psychic-session");
              }}
            >
              {expanded.includes("psychic-session") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/psychic-session#res">#res</NavLink>
          <NavLink to="/api/psychic-session#constructor">#constructor</NavLink>
          <NavLink to="/api/psychic-session#cookie">#cookie</NavLink>
          <NavLink to="/api/psychic-session#setCookie">#setCookie</NavLink>
          <NavLink to="/api/psychic-session#daysToMilliseconds">
            #daysToMilliseconds
          </NavLink>
        </nav>

        <nav className={expanded.includes("db") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/db">
              db
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("db");
              }}
            >
              {expanded.includes("db") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/db#raw">#raw</NavLink>
        </nav>

        <nav className={expanded.includes("params") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/params">
              params
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("params");
              }}
            >
              {expanded.includes("params") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/params#restrict">.restrict</NavLink>
        </nav>

        <nav className={expanded.includes("encrypt") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/encrypt">
              Encrypt
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("encrypt");
              }}
            >
              {expanded.includes("encrypt") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/encrypt#sign">.sign</NavLink>
          <NavLink to="/api/encrypt#decode">.decode</NavLink>
        </nav>

        <nav className={expanded.includes("hash") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/hash">
              Hash
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("hash");
              }}
            >
              {expanded.includes("hash") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/hash#gen">.gen</NavLink>
          <NavLink to="/api/hash#check">.check</NavLink>
        </nav>

        <nav className={expanded.includes("env") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/env">
              env
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("env");
              }}
            >
              {expanded.includes("env") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/env#load">#load</NavLink>
        </nav>

        <nav className={expanded.includes("log") ? "expanded" : ""}>
          <div className="header-group">
            <NavLink className="subgroup-title" to="/api/log">
              log
            </NavLink>
            <button
              onClick={() => {
                toggleExpanded("log");
              }}
            >
              {expanded.includes("log") ? (
                <MdOutlineArrowDropDown />
              ) : (
                <MdArrowRight />
              )}
            </button>
          </div>
          <NavLink to="/api/log#header">#header</NavLink>
          <NavLink to="/api/log#puts">#puts</NavLink>
          <NavLink to="/api/log#write">#write</NavLink>
          <NavLink to="/api/log#info">#info</NavLink>
          <NavLink to="/api/log#error">#error</NavLink>
          <NavLink to="/api/log#welcome">#welcome</NavLink>
        </nav>
      </nav>
    </LeftSidebar>
  );
}
