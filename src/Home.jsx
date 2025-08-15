import {
  Typography,
  Button,
  Container,
  Stack,
  Divider,
  SvgIcon,
  Box,
  IconButton
} from "@mui/material";
import EmptyBox from "./assets/empty-box.svg?react";
import { useNavigate } from "react-router";
import AppTitle from "./AppTitle";
import { useState, useEffect } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Home() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('form')
  }

  const [contacts, setContacts] = useState([])

  const getContacts = () => {
    fetch('http://localhost:4000/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getContacts()
  }, [])

  const deleteUser = (id, name) => {
    const confirm = window.confirm(`Queres deletar mesmo ${name}?`)
    if (!confirm) return;

    fetch(`http://localhost:4000/contacts/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        getContacts();
      })
      .catch(erro => console.log(erro))
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

      {
        contacts.length === 0 && (
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
        )
      }

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {
          contacts.map((contact) => (
            <div
              key={contact.id}
              style={{
                padding: 16,
                borderRadius: '8px',
                boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontWeight: 'bold' }}>{contact.name}</span>
                <span style={{ color: '#BCBCBC', fontSize: '14px' }}>{contact.email}</span>
                <span style={{ color: '#BCBCBC', fontSize: '14px' }}>{contact.phone}</span>
              </div>
              <div style={{ alignContent: 'center' }}>
                <IconButton color="primary"><EditOutlinedIcon /></IconButton>
                <IconButton color="primary" onClick={() => deleteUser(contact.id, contact.name)}><DeleteOutlineOutlinedIcon /></IconButton>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  );
}
