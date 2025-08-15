import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import AppTitle from "./AppTitle";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
export default function FormPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  const cadastrarUsuario = (event) => {
    event.preventDefault()

    const form = new FormData(event.target)
    const data = Object.fromEntries(form)

    fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        window.alert('Sucesso!');
        event.target.reset();
      })
      .catch(error => console.log(error))
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

      <form onSubmit={cadastrarUsuario}>
        <Stack gap={2} mb={4}>
          <TextField variant="filled" label="Nome" name="name" />
          <TextField variant="filled" label="E-mail" name="email" />
          <TextField variant="filled" label="Telefone" name="phone" />
        </Stack>
        <Button variant="contained" type="submit" fullWidth>Cadastrar</Button>
      </form>
    </Container>
  );
}
