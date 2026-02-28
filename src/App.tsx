import { APP_NAME, APP_TAGLINE } from "./lib/constants";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-light">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary">{APP_NAME}</h1>
        <p className="mt-2 text-text-secondary">{APP_TAGLINE}</p>
      </div>
    </div>
  );
}

export default App;
