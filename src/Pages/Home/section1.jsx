import { Container, Box, Typography, Button } from "@mui/material";
import './section1.css'; 

function Section1() {
  return (
    <div className="body">
      <Container >
        <Box className="inputBox1">
          <Typography className="inputText1">
            Streamline Your Automotive Business with Cutting-Edge Software Solutions
          </Typography>
        </Box>

        <Box className="inputBox2">
          <Typography className="inputText2">
            <span className="boldText">CoManager</span> is your go-to solution for 
            <span className="boldText"> automotive business management</span>. 
            Designed for garage owners, detailing studios, and car accessories shops, our software simplifies daily operations, allowing you to focus on delivering exceptional service to your customers.
          </Typography>
        </Box>

        <Box className="imageBox">
          <img src="/Images/bk 1.svg" alt="Logo" className="myImage"/>
        </Box>

        <Box className="section_btn">
          <Button variant="contained" className="section1_btn">Know More</Button>
        </Box>
        <Box className="section2">
          <Box className="heading1">
            <Typography className="heading">Features we provide</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Section1;
