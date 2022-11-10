import AppRouter from "./routes/routes";
import "./App.css";

export const ENDPOINT = "http://localhost:8080";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  return (
    <div className="App">
    <AppRouter />
    </div>
  );
}

export default App;
