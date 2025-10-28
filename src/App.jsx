import "./App.css";
import "./index.css";

import Navbar from "./compunents/Navbar";
import Footer from "./compunents/Footer";
import Container from "./compunents/Container";
import IssuesManagement from "./compunents/IssuesManagement";
import { Suspense } from "react";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};
function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar />
      {/* Box */}

      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
