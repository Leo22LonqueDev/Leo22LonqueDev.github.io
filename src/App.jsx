import { Box, Button, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import imgLeonardo from './imgs/imgLeonardo.png'
import { FaHandPeace } from "react-icons/fa"

const App = () => {

  return (
    <>
      <Container maxWidth>
        <Box component={Paper} elevation={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderRadius: '15px', padding: '15px' }}>
          <Button href='' target='_blank' color='secondary' sx={{ fontSize: '50px' }}>CURRÍCULO</Button>
          <Button href='https://www.linkedin.com/in/leonardodearrudalonque/' target='_blank' color='secondary' sx={{ fontSize: '50px' }}>LINKEDIN</Button>
          <Button href='https://www.instagram.com/leo_lonque/' target='_blank' color='secondary' sx={{ fontSize: '50px' }}>INSTAGRAM</Button>
          <Button href='https://github.com/Leo22LonqueDev' target='_blank' color='secondary' sx={{ fontSize: '50px' }}>GITHUB</Button>
        </Box>
        <br />
        <Divider />
        <br />
        <Box component={Paper} elevation={7} sx={{ borderRadius: '15px', bgcolor: grey[300] }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '70px', maxWidth: '600px' }}>
              <FaHandPeace /> BEM-VINDOS MEUS NOBRES!
            </Typography>
            <img src={imgLeonardo} alt='imgLeonardo' />
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
              <Typography sx={{ fontSize: '30px', maxWidth: '600px' }}>
                <strong>Desenvolvedor Javascript Junior</strong>
              </Typography>
              <br />
              <br />
              <Typography sx={{ fontSize: '30px', maxWidth: '600px' }}>
                Me chamo Leonardo Lonque, estou iniciando a carreira de Desenvolvedor,
                com muita vontade de aprender e crescer,
                estou atualizando minha página com os atuais conhecimentos que possuo.
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
            <Chip label='REACT' color='secondary' />
            <Chip label='GIT' color='secondary' />
            <Chip label='GITHUB' color='secondary' />
            <Chip label='MONGODB' color='secondary' />
          </Typography>
        </Box>
        <br />
        <Divider />
        <br />
        <Box component={Paper} elevation={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '15px', padding: '15px' }}>
          <Typography>
            <strong>ENTRE EM CONTATO:</strong>
          </Typography>
          <br />
          <Typography>
            Telefone: <strong><Button
              href='https://api.whatsapp.com/send?1=pt_BR&phone=5541995871533'
              target='_blank'
              color='secondary'
              variant='contained'
              sx={{ borderRadius: '25px' }}
            >(41) 99587-1533</Button></strong>
          </Typography>
          <br />
          <Typography>
            E-mail: <strong><Button
              href='mailto:leonardoarrudalonque@outlook.com'
              target='_blank'
              color='secondary'
              variant='contained'
              sx={{ borderRadius: '25px'}}
            >leonardoarrudalonque@outlook.com</Button></strong>
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
