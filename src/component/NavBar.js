import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import Menu from '@mui/material/Menu';
import {
    useNavigate,
} from "react-router-dom";

function NavBar(props) {
    let navigate = useNavigate();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
    setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
    <Box sx={{ flexGrow: 1 }}>
    <FormGroup>
        <FormControlLabel
        control={
            <Switch
            checked={auth}
            onChange={handleChange}
            aria-label="login switch"
            />
        }
        label={auth ? 'Logout' : 'Login'}
        />
    </FormGroup>
    <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            跳跳先生影城
        </Typography>

        <Button color="inherit" onClick={()=> navigate('/TheaterInfo')}>影城介紹</Button>
        <Button color="inherit" onClick={()=> navigate('MovieInfo')}>電影介紹</Button>
        <Button color="inherit" onClick={()=> navigate('TicketBuyPage')}>線上訂票</Button>
            {auth ? (
            <>
            <Button color="inherit" onClick={()=> navigate('Record')}>訂票紀錄</Button>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                >
                <AccountCircle />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                </Menu>
            </>
            ) : (
            <>
            <Button color="inherit" onClick={()=> navigate('Login')}>會員登入</Button>
            <Button color="inherit" onClick={()=> navigate('Register')}>會員註冊</Button>
            </>
            )}
        </Toolbar>
    </AppBar>
    </Box>
    )
}

export default NavBar;