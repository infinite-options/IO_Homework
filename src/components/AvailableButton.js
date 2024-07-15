import { Box } from "@mui/material";



export default function AvailableButton({ isAvailable, givenTime }) {

    return (
        <div>
            <Box style={{ backgroundColor: isAvailable ? '#76B148' : '#A52A2A', padding: '5px', borderRadius: '5px',width:'165px' ,display: 'inline-block'}}>
                <h3 style={{
                    color: isAvailable ? givenTime ? '#F2F2F2' : '#F2F2F2' : '#F2F2F2',
                    fontSize: '14px',
                    padding: '0px',
                    margin: '0px'
                }}>
                    {isAvailable ? givenTime ? `Available Until ${givenTime}` : 'Available Now' : `Available After ${givenTime}`}
                </h3>
            </Box>

        </div>

    )
}