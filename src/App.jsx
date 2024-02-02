import { Box, Button, Chip, Container, Divider, Paper, Typography } from "@mui/material";

const App = () => {

  return (
    <>
      <Container maxWidth >
        <Box component={Paper} elevation={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderRadius: '15px' }}>
          <Button href='' target='_blank' sx={{ color: 'blueviolet', fontSize: '50px' }}>CURRÍCULO</Button>
          <Button href='https://www.linkedin.com/in/leonardodearrudalonque/' target='_blank' sx={{ color: 'blueviolet', fontSize: '50px' }}>LINKEDIN</Button>
          <Button href='' target='_blank' sx={{ color: 'blueviolet', fontSize: '50px' }}>INSTAGRAM</Button>
          <Button href='https://github.com/Leo22LonqueDev' target='_blank' sx={{ color: 'blueviolet', fontSize: '50px' }}>GITHUB</Button>
        </Box>
        <br />
        <Divider />
        <br />
        <Box component={Paper} elevation={7} sx={{ borderRadius: '15px' }}>
          <Box sx={{ padding: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '70px', maxWidth: '600px' }}>
              SALVE SALVE MEUS NOBRES!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
              <Typography sx={{ fontSize: '30px', maxWidth: '600px' }}>
                Me chamo Leonardo Lonque, sou Desenvolvedor Full-Stack Javascript Junior,
                Iniciando a carreira de Desenvolvedor, com muita vontade de aprender e crescer, estou atualizando minha página com os atuais conhecimentos.
              </Typography>
            </Box>
          </Box>
        </Box>
        <br />
        <Divider />
        <br />
        <Box component={Paper} elevation={7} sx={{ borderRadius: '15px' }}>
          <Typography sx={{ padding: '15px', display: 'flex', justifyContent: 'space-around' }}>
            <Chip label='JAVASCRIPT' color='secondary' />
            <Chip label='GIT' color='secondary' />
            <Chip label='GITHUB' color='secondary' />
            <Chip label='MONGODB' color='secondary' />
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
