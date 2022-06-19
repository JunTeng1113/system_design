import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Login() {
    return (
        <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        p: '20px'
        }}>
        <Paper sx={{
            minWidth: '400px',
            minHeight: '100px',
            p: '10px',
            display: 'flex',
            flexDirection: 'column',
            pb: '30px'
        }}>
            <Typography sx={{textAlign: 'center', mb: '20px'}} variant='h5'>會員登入</Typography>
        
            <TextField sx={{py: '10px'}} id="outlined-basic" label="會員帳號" variant="outlined" />
            <TextField sx={{py: '10px'}} id="outlined-basic" label="密碼" variant="outlined" />
            <Button sx={{height: '50px'}} variant="contained">登入</Button>
        </Paper>
        </Box>
    )
}
export default Login;