import { ImagesObserverProvider } from "./contexts/ImagesObserver";
import Home from "./pages/Home";

function App() {
  return (
    <ImagesObserverProvider>
      <Home />
    </ImagesObserverProvider>
  );
}

export default App;
