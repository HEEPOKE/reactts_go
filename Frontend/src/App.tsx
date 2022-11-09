import { useState } from "react";
import { Stack, Button } from "react-bootstrap";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div>
        <h1>
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Button as link
            </Button>
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
        </h1>
      </div>
    </div>
  );
}

export default App;
