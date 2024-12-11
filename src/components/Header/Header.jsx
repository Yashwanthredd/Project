

import { AppBar, Toolbar, Typography, Button,  } from '@mui/material';

const header = ({ title, onButtonClick, children }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

    
        {children}

        {onButtonClick && (
          <Button color="inherit">
            Custom Button
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default header;
