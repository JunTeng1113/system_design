import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Register() {
    return (
    <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        p: '20px'
    }}>
        <Paper sx={{
        minWidth: '400px',
        minHeight: '200px',
        p: '10px',
        display: 'flex',
        flexDirection: 'column',
        pb: '30px'
        }}>
        <Typography sx={{textAlign: 'center', mb: '20px'}} variant='h5'>會員註冊</Typography>
        
        <TextField sx={{py: '10px'}} id="outlined-basic" label="身分證字號" variant="outlined" />
        <TextField sx={{py: '10px'}} id="outlined-basic" label="姓名" variant="outlined" />
        <TextField sx={{py: '10px'}} id="outlined-basic" label="出生日期" variant="outlined" />
        <TextField sx={{py: '10px'}} id="outlined-basic" label="手機號碼" variant="outlined" />
        <TextField sx={{py: '10px'}} id="outlined-basic" label="電子信箱" variant="outlined" />
        <TextField sx={{py: '10px'}} id="outlined-basic" label="密碼" variant="outlined" />
        <TextField sx={{py: '10px'}} id="outlined-basic" label="確認密碼" variant="outlined" />
        <Button sx={{height: '50px'}} variant="contained">註冊</Button>
        </Paper>
    </Box>
    )
}

export default Register;