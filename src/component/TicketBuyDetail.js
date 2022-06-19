import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { alpha, styled } from '@mui/material/styles';
import {
    useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import moment from "moment"
import { useDispatch, useSelector } from "react-redux";
import { BuyTicket } from "../Actions";
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#2196f3',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#2196f3',
    },
    '& .MuiOutlinedInput-root': {
        width: '40px',
        borderRadius: '0px',
        textAlign: 'center',
        '& fieldset': {
        borderColor: '#2196f3',
        },
        '&:hover fieldset': {
        borderColor: '#2196f3',
        },
        '&.Mui-focused fieldset': {
        borderColor: '#2196f3',
        },
    },
});

function TicketBuyDetail(props) {
    let navigate = useNavigate();
    const TicketData = useSelector(state => state.BuyTicket);
    const dispatch = useDispatch();
    const { steps } = props;

    const handleNumber = (number) => {
        const newNumber = TicketData.number + number;
        
        dispatch(BuyTicket('set', {number: newNumber}));
        
        dispatch(BuyTicket('set', {tickets: {"學生優惠票": {amount: newNumber, price: 180}}}));
        
        const { meals } = TicketData;
        const newMeals = Object.assign({}, ...Object.keys(meals).map((key) => {return {[key]: { amount: meals[key].amount > 0 ? newNumber : 0, price: meals[key].price}}}));
        dispatch(BuyTicket('set', {meals: newMeals }));

    }
    const handleMeal = (data) => {
        const { name, amount, price } = data;
        let { meals } = TicketData;
        let meal = meals[name];
        console.log(meal)
        let newMeals = {...meals, [name]: {amount: (meal === undefined || meal.amount === 0) ? amount : 0, price: price}};
        
        console.log(newMeals);
        dispatch(BuyTicket('set', {meals: newMeals }));
    }
    
    const handlePayPage = () => {
        const { tickets, meals } = TicketData;
        let newTotal = Object.values(tickets).map((item) => item.amount * item.price).reduce((sum, value) => sum + value); // 電影票
        Object.values(meals).length > 0 && (newTotal += Object.values(meals).map((item) => item.amount * item.price).reduce((sum, value) => sum + value)); // 餐點
        dispatch(BuyTicket('set', {total: newTotal}));
        
        // 非真實交易時間，因為非同步問題，所以暫時在這做處理
        const datetime = moment().format("YYYY/MM/DD HH:mm:ss");
        dispatch(BuyTicket('set', {tradeDateTime: datetime}))

        navigate('../TicketBuyPay');
    }
    useEffect(() => {
        console.log(TicketData);
    }, [TicketData]);
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
        p: '30px',
        display: 'flex',
        flexDirection: 'column'
        }}>
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
        </Box>
        <Typography sx={{textAlign: 'center', mb: '20px', mt: '10px'}} variant='h5'>詳細資訊</Typography>
        <Box sx={{ minWidth: 120 }}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            影城：
            <FormControl sx={{ m: 1, minWidth: '320px' }} disabled>
                <InputLabel id="demo-simple-select-disabled-label">{TicketData.theater}</InputLabel>
                <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="Age"
                >
                </Select>
            </FormControl>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            電影：
            <FormControl sx={{ m: 1, minWidth: '320px' }} disabled>
                <InputLabel id="demo-simple-select-disabled-label">{TicketData.movie}</InputLabel>
                <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="Age"
                >
                </Select>
            </FormControl>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            日期：
            <FormControl sx={{ m: 1, minWidth: '320px' }} disabled>
                <InputLabel id="demo-simple-select-disabled-label">{TicketData.date}</InputLabel>
                <Select
                labelId="demo-simple-select-disabled-label"
                id="demo-simple-select-disabled"
                label="Age"
                >
                </Select>
            </FormControl>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            場次：
            <FormControl sx={{ m: 1, minWidth: '320px' }} disabled>
            <InputLabel id="demo-simple-select-label">{TicketData.time}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
            </Select>
            </FormControl>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
            人數：
            <ButtonGroup sx={{ m: 1, minWidth: '320px' }}>
                <Button
                aria-label="reduce"
                onClick={(e) => handleNumber(-1)}
                >
                <RemoveIcon fontSize="small" />
                </Button>
                <CssTextField id="custom-css-outlined-input" value={TicketData.number} />
                {/* <TextField sx={{width: '40px', textAlign: 'center', borderRadius: '0px',borderColor: 'primary.main' }} id="outlined-basic" label="" color="primary" value={TicketData.number} /> */}
                <Button
                aria-label="increase"
                onClick={(e) => handleNumber(1)}
                >
                <AddIcon fontSize="small" />
                </Button>
            </ButtonGroup>
            </Box>
            
            <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
            <Box sx={{ mt: 3 }}>餐點：</Box>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox checked={TicketData.meals['可口可樂'] ? TicketData.meals['可口可樂'].amount > 0: false} onChange={(e) => handleMeal({name: '可口可樂', amount: TicketData.number, price: 60})} name="gilad" />
                    }
                    label="可口可樂　60元"
                />
                <FormControlLabel
                    control={
                    <Checkbox checked={TicketData.meals['爆米花'] ? TicketData.meals['爆米花'].amount > 0 : false} onChange={(e) => handleMeal({name: '爆米花', amount: TicketData.number, price: 120})} name="jason" />
                    }
                    label="爆米花　　120元"
                />
                <FormControlLabel
                    control={
                    <Checkbox checked={TicketData.meals['熱狗堡'] ? TicketData.meals['熱狗堡'].amount > 0 : false} onChange={(e) => handleMeal({name: '熱狗堡', amount: TicketData.number, price: 80})} name="antoine" />
                    }
                    label="熱狗堡　　80元"
                />
                </FormGroup>
            </FormControl>
            </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', py: '10px'}}>
            <Button sx={{height: '50px', width: '150px'}} variant="contained" onClick={() => navigate('../TicketBuyPage')}>返回</Button>
            <Button sx={{height: '50px', width: '150px'}} variant="contained" onClick={handlePayPage}>完成訂票</Button>
        </Box>
        </Paper>
    </Box>

    )
}

export default TicketBuyDetail;