import "./App.css";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme/theme";
import PageCreateTask from "./pages/CreateTask";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <PageCreateTask />
    </ThemeProvider>
  );
}

export default App;
