import { Container, Box, Typography, Card, CardContent, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Price.css'

function Price() {
    return (
        <Container maxwidth='sm'>
            <Typography class='text-1'>CoManager Software Pricing - Tailored Solutions for Automotive  <span className='center-word'>Business</span></Typography>
            <Typography class='text-2'>Select the perfect plan for your garage center, auto detailing studio, or car accessories shop. With CoManager software pricing, you get customized solutions designed to streamline your automotive business operations. </Typography>

            <Box className='cardBox'>
                <Grid container spacing={4} className='grid-box'>
                    <Grid item xs={12} sm={6} md={4} size={3} >
                        <Card className='cardBox-1'>
                            <CardContent>
                                <Typography gutterBottom className='cardBox-text'>
                                    &#8377;0 <span >/month</span>
                                </Typography>
                                <Typography variant="body2" className='cardBox-text2'>
                                    Trial plan
                                </Typography>
                                <Typography variant="body3" className='cardBox-text3'>
                                    Free Trial for - 7 Days
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} size={3} >
                        <Card className='cardBox-1'>
                            <CardContent>
                                <Typography gutterBottom className='cardBox-text'>
                                    &#8377;0 <span >/month</span>
                                </Typography>
                                <Typography variant="body2" className='cardBox-text2'>
                                    Golden Plan
                                </Typography>
                                <Typography variant="body3" className='cardBox-text3'>
                                    Essential tools for efficient management
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} size={3}>
                        <Card className='cardBox-1'>
                            <CardContent>
                                <Typography gutterBottom className='cardBox-text'>
                                    &#8377;0 <span>/month</span>
                                </Typography>
                                <Typography variant="body2" className='cardBox-text2'>
                                    Premium Plan
                                </Typography>
                                <Typography variant="body3" className='cardBox-text3'>
                                    Comprehensive solution for full-scale operations
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>

        </Container>
    )
}

export default Price
