import "./style/app.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import GuidesPage from "./app/pages/guides";
import APIPage from "./app/pages/api";
import APIPsychicControllerPage from "app/pages/api/psychic-controller";
import APIPsychicModelPage from "app/pages/api/psychic-model";
import APIPsychicSerializerPage from "app/pages/api/psychic-serializer";
import APIDbPage from "app/pages/api/db";
import APIPsychicConfigPage from "app/pages/api/psychic-config";
import APIEncryptPage from "app/pages/api/encrypt";
import APIHashPage from "app/pages/api/hash";
import APIEnvPage from "app/pages/api/env";
import APILogPage from "app/pages/api/log";
import APIPsychicRouterPage from "app/pages/api/psychic-router";
import APIPsychicServerPage from "app/pages/api/psychic-server";
import APIParamsPage from "app/pages/api/params";
import APIPsychicSessionPage from "app/pages/api/psychic-session";

function App() {
  return (
    <div className="app">
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route>
              <Route path="/" element={<Navigate to="/guides" />}></Route>
              <Route path="/guides" element={<GuidesPage />}></Route>
              <Route path="/api" element={<APIPage />}></Route>
              <Route
                path="/api/psychic-config"
                element={<APIPsychicConfigPage />}
              ></Route>
              <Route
                path="/api/psychic-controller"
                element={<APIPsychicControllerPage />}
              ></Route>
              <Route
                path="/api/psychic-model"
                element={<APIPsychicModelPage />}
              ></Route>
              <Route
                path="/api/psychic-serializer"
                element={<APIPsychicSerializerPage />}
              ></Route>
              <Route
                path="/api/psychic-router"
                element={<APIPsychicRouterPage />}
              ></Route>
              <Route
                path="/api/psychic-server"
                element={<APIPsychicServerPage />}
              ></Route>
              <Route
                path="/api/psychic-session"
                element={<APIPsychicSessionPage />}
              ></Route>
              <Route path="/api/params" element={<APIParamsPage />}></Route>
              <Route path="/api/db" element={<APIDbPage />}></Route>
              <Route path="/api/encrypt" element={<APIEncryptPage />}></Route>
              <Route path="/api/hash" element={<APIHashPage />}></Route>
              <Route path="/api/env" element={<APIEnvPage />}></Route>
              <Route path="/api/log" element={<APILogPage />}></Route>
            </Route>
          )
        )}
      />
    </div>
  );
}

export default App;
