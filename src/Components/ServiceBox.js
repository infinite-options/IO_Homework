import AccordianList from './AccordianList';
import { Box, Typography } from '@mui/material';

export default function ServiceBox({ bgcolor, serviceName, serviceList, serviceIcon, handleAccordianClick }) {
    return (
        <Box
            sx={{
                backgroundColor: bgcolor,
                borderRadius: '10px',
                marginTop: '1%',
                marginBottom: '1%',
                padding: '2%',
                paddingTop: '5px',}}>
            <Typography
                sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Source Sans Pro',
                    fontSize: '25px',
                    fontWeight: 'bold',
                    textAlign: 'left',}}>
                {serviceName}
            </Typography>
            <AccordianList
                serviceList={serviceList}
                serviceIcon={serviceIcon}
                handleAccordianClick={handleAccordianClick}
                serviceName={serviceName}
                serviceColor={bgcolor}/>
        </Box>
    )
}