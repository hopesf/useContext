import Container from "./Components/Container";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}
