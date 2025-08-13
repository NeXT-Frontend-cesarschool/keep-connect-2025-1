import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import ProTip from "./ProTip";

export default function App() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
