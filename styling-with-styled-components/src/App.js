import logo from "./logo.svg";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;
function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <AppBlock>
        <Button online fullWidth>
          BUTTON
        </Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
        <Button color="pink" size="large">
          BUTTON
        </Button>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
