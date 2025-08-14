import {
  Typography,
  Button,
  Container,
  Stack,
  Divider,
  SvgIcon,
  Box,
} from "@mui/material";
import EmptyBox from "./assets/empty-box.svg?react";
import { useNavigate } from "react-router";
import AppTitle from "./AppTitle";

export default function Home() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('form')
  }

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <AppTitle />

      <Button variant="outlined" onClick={goToForm} sx={{ width: 145, mb: 2, mt: 4, borderWidth: 2 }}>
        Novo contato
      </Button>
      <Divider />

      <Stack alignItems="center" gap={2} mt={4}>
        <SvgIcon
          component={EmptyBox}
          inheritViewBox
          sx={{ width: 110, height: 77 }}
        />
        <Typography width={400} fontWeight="bold" color="#BCBCBC" textAlign="center">
          Você ainda não tem nenhum contato cadastrado! Clique no botão{" "}
          <Box component="span" color="primary.dark">
            “Novo contato”
          </Box>{" "}
          acima para cadastrar o seu primeiro!
        </Typography>
      </Stack>
    </Container>
  );
}
