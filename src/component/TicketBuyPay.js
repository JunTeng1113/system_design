import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {
    useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { BuyTicket } from "../Actions";
import moment from "moment"

import Service from './service.js';
function TicketBuyPay(props) {
    let navigate = useNavigate();
    const TicketData = useSelector(state => state.BuyTicket);
    const dispatch = useDispatch();
    const { steps } = props;
    const handlePay = () => {
        // 如果完成付款
        if (true) {
            console.log('付款成功')
        
            // const datetime = moment().format("YYYY/MM/DD HH:mm:ss");
            // dispatch(BuyTicket('set', {tradeDateTime: datetime})).then(() => {
            //     console.log(TicketData)
            // });

        } else {
            console.log('付款失敗')
        }

        
        Service.create(TicketData).on("value", function (snapshot) {
            const tradeNumber = snapshot.key; //交易編號為時間戳記
            console.log('訂票成功！');
            navigate(`../TicketFinishedDetail/${tradeNumber}`);
            console.log(TicketData);
            
            dispatch(BuyTicket('set', {
                theater: "",
                movie: "",
                date: "",
                time: "",
                number: 1,
                tickets: {'學生優惠票': {amount: 1, price: 180}},
                meals: {},
                tradeDateTime: "",
                tradeNumber: "",
                seats: [],
                total: 0,
            }));
        })
    }

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
            <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
        </Box>
        <Typography sx={{textAlign: 'center', mb: '20px', mt: '10px'}} variant='h5'>付款資訊</Typography>
        <Box sx={{ minWidth: 120 }}>
            <Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
            <Box sx={{ minWidth: '80px', textAlign: 'right', mx: '10px'}}>
            卡號：
            </Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField>
            <Box sx={{ minWidth: '10px', textAlign: 'center'}}>-</Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField>
            <Box sx={{ minWidth: '10px', textAlign: 'center'}}>-</Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField>
            <Box sx={{ minWidth: '10px', textAlign: 'center'}}>-</Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
            <Box sx={{ minWidth: '80px', textAlign: 'right', mx: '10px'}}>
            有效月年：
            </Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField>
            <Box sx={{ minWidth: '25px', textAlign: 'center'}}>月</Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField>
            <Box sx={{ minWidth: '25px', textAlign: 'center'}}>年</Box>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', my: 2}}>
            <Box sx={{ minWidth: '80px', textAlign: 'right', mx: '10px'}}>
            末三碼：
            </Box>
            <TextField sx={{ width: '80px'}} size="small"></TextField> 
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', py: '10px'}}>
            <Button sx={{height: '50px', width: '150px'}} variant="contained" onClick={() => navigate('../TicketBuyDetail')}>返回</Button>
            <Button sx={{height: '50px', width: '150px'}} variant="contained" onClick={handlePay}>送出</Button>
            </Box>
        </Box>
        </Paper>
    </Box>

    )
}

export default TicketBuyPay;