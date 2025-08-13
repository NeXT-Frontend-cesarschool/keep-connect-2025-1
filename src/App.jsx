import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import ProTip from "./ProTip";
import ReactLogo from './assets/react.svg?react';
import SvgIcon from "@mui/material/SvgIcon";

export default function App() {
  return (
    <Container sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Stack sx={{ alignItems: "center" }}>
        <SvgIcon component={ReactLogo} inheritViewBox sx={{ width: 100, height: 100, mb: 2 }} />
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example
        </Typography>
        <ProTip />
        <Copyright />
      </Stack>
    </Container>
  );
}
