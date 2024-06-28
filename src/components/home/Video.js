import { Box, Typography } from '@mui/material';

const Video = () => {
    return (
        <Box id="video" sx={{ width: '100%', textAlign: 'center', padding: 0, margin: 0 }}>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
            </Typography>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    overflow: 'hidden',
                    '& iframe': {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    },
                }}
            >
                <iframe
                    src="https://www.youtube.com/embed/oCwdsBSSGsU?si=iVf2xrhSSDsEiy9A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Box>
        </Box>
    );
}

export default Video;
