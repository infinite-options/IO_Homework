import { Box } from "@mui/material";
import Header from "../header/Header";
import Bookings from "../bookings/Bookings";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <Box>
            <Header />
            <Bookings />
            <Footer />
        </Box>
    );
}
 
export default Home;