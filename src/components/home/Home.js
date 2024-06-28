import '../styles/styles.css'
import Navbar from '../navbar/Navbar.js'
import StartBuild from './StartBuild.js'
import Donate from './Donate.js'
import Invest from './Invest.js'
import Video from './Video.js'
import Bottom from '../bottom/Bottom.js'
import Form from '../Form.js'
import { Box, Grid } from '@mui/material'

const Home = () => {
    return (
        <div>
            <Navbar />
            <StartBuild />
            <Donate />
            <Invest />
            <Grid container sx={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'100px'
            }}>
                <Box sx={{
                    width: '80%'
                }}>
                    <Form />
                </Box>
            </Grid>
            <Video />
            {/* <Bottom /> */}
        </div>
    );
}
 
export default Home;