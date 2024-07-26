import { Box, Grid, Typography } from "@mui/material";
import AdminHeader from "./AdminHeader";
import AllServices from "./AllServices";
import ServiceDetails from "../details/ServiceDetails";

const Service = () => {
    return (
        <Box>
            <AdminHeader />
            <AllServices />
        </Box>
    );
}
 
export default Service;