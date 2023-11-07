import { Provider } from "./contexts";
import Rotas from "./routes";

export default function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}
