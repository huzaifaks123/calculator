// import prtovider-tool and store to make state availbale
import { store } from "./store";
import { Provider } from "react-redux";

// import pages and other Components here
import Body from "./Components/body";

// maintain app component with global state
function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
