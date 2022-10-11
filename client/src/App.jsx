import "./index.scss";
import Graph from "./components/Graph";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Chart */}
        <Graph></Graph>
        {/* Form */}
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
