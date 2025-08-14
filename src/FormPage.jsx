import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import AppTitle from "./AppTitle";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";

export default function FormPage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
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

      <Button onClick={goBack} startIcon={<ArrowBackIcon />} sx={{ width: 80 }}>Voltar</Button>

      <Typography fontSize={32} fontWeight="bold">
        Novo contato
      </Typography>

      <Stack gap={2} mb={4}>
        <TextField variant="filled" label="Nome" />
        <TextField variant="filled" label="E-mail" />
        <TextField variant="filled" label="Telefone" />
      </Stack>
      <Button variant="contained">Cadastrar</Button>
    </Container>
  );
}
