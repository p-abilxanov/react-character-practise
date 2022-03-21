import React, { Suspense } from "react";
import Loader from "./Loader.js";
const Main = React.lazy(() => import("./Components/Main/Main.js"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    </div>
  );
}
