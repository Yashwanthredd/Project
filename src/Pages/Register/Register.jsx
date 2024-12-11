import { Container, Box, Typography, FormControlLabel, FormControl,  TextField, Checkbox, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Register.css'
import { Link } from 'react-router-dom';

function Login() {
    
    
    return (
        <Container maxwidth='sm'>
            <Box className='mainBox'>
                <Grid container spacing={4} className='mainbox1'>
                    <Grid item xs={12} sm={6} md={4} size={5} className='regBox' mt={10} ml={0}>
                        <img src="/Images/Group 54.svg" alt=""  className='logo' />
                        <Typography className='regText' mt={3}>Register Now</Typography>
                        <FormControl>
                            
                            <Grid container direction="column" spacing={2}>
                            <Grid item>
                                    <TextField className="inputText" label="Full Name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item>
                                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="number" className="inputText" fullWidth/>
                                </Grid>
                                <Grid item>
                                    <TextField className="inputText" label="Your Password" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item>
                                    <TextField className="inputText" label="Company Name" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item>
                                    <TextField className="inputText" label="Address" variant="outlined" fullWidth />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" spacing={10} mb={3}>
                                <Grid item>
                                    <FormControlLabel control={<Checkbox defaultChecked />}label={ <Typography variant="body2" display="inline"> By proceeding, you agree to{' '} <Link href="#" color="primary" underline="hover" display="inline"> Comanager’s Terms & Conditions </Link>{' '} and{' '} <Link href="#" color="primary" underline="hover" display="inline"> Privacy policy </Link>. </Typography> } class='checkbox' />
                                </Grid>
                                
                            </Grid>
                            <Button class='regBtn'>Register</Button>
                        </FormControl>
                        <Grid container spacing={2} direction="column" mt={2}>
                            <Grid item>
                                <Typography className='LoginText'>Already have an Account? <Link href="#">Login Now</Link></Typography>
                            </Grid>
                            
                            
                            
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} size={5} className='imageBox' mt={10} ml={5}>
                        <img src="/Images/Login illustration.svg" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}
export default Login;
