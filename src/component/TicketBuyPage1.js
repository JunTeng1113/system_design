
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {
    useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BuyTicket } from "../Actions";

function TicketBuyPage1(props) {
    let navigate = useNavigate();
    const TicketData = useSelector(state => state.BuyTicket);
    const dispatch = useDispatch();
    const { steps } = props;
    

    const handleTheater = (event) => {
        const theater = event.target.value;
        dispatch(BuyTicket('set', {theater: theater}));
    }

    const handleMovie = (event) => {
        const movie = event.target.value;
        dispatch(BuyTicket('set', {movie: movie}));
    }

    const handleDate = (event) => {
        const date = event.target.value;
        dispatch(BuyTicket('set', {date: date}));
    }

    const handleTime = (event) => {
        const time = event.target.value;
        dispatch(BuyTicket('set', {time: time}));
    }

    useEffect(() => {
        console.log(TicketData);
    },[TicketData])

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
            <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
        </Box>
        <Typography sx={{textAlign: 'center', mb: '20px', mt: '10px'}} variant='h5'>線上訂票</Typography>
        <Stack>
            <FormControl sx={{py: '10px', minWidth: '500px'}}>
                <InputLabel>請選擇影城</InputLabel>
                <Select
                    label="Age"
                    onChange={handleTheater}
                    defaultValue={TicketData.theater}
                >
                    <MenuItem value={'高科燕巢校區跳跳先生影城'}>高科燕巢校區跳跳先生影城</MenuItem>
                    <MenuItem value={'岡山百貨跳跳先生影城'}>岡山百貨跳跳先生影城</MenuItem>
                    <MenuItem value={'新光三越跳跳先生影城'}>新光三越跳跳先生影城</MenuItem>
                    <MenuItem value={'夢時代跳跳先生影城'}>夢時代跳跳先生影城</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{py: '10px', minWidth: '500px'}}>
                <InputLabel>請選擇影片</InputLabel>
                <Select
                    onChange={handleMovie}
                    defaultValue={TicketData.movie}
                >
                    <MenuItem value={'怪奇物語4'}>怪奇物語4</MenuItem>
                    <MenuItem value={'奇異果博士2：失控多重宇宙'}>奇異果博士2：失控多重宇宙</MenuItem>
                    <MenuItem value={'怪獸與鄧不利多的祕密'}>怪獸與鄧不利多的祕密</MenuItem>
                    <MenuItem value={'我吃了那男孩一整年的早餐'}>我吃了那男孩一整年的早餐</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{py: '10px', minWidth: '500px'}}>
                <InputLabel>請選擇日期</InputLabel>
                <Select
                    onChange={handleDate}
                    defaultValue={TicketData.date}
                >
                    <MenuItem value={'2022/06/22'}>2022/06/22</MenuItem>
                    <MenuItem value={'2022/06/23'}>2022/06/23</MenuItem>
                    <MenuItem value={'2022/06/24'}>2022/06/24</MenuItem>
                    <MenuItem value={'2022/06/25'}>2022/06/25</MenuItem>
                    <MenuItem value={'2022/06/26'}>2022/06/26</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{py: '10px', minWidth: '500px'}}>
                <InputLabel>請選擇場次</InputLabel>
                <Select
                    onChange={handleTime}
                    defaultValue={TicketData.time}
                >
                    <MenuItem value={'16:40'}>16:40</MenuItem>
                    <MenuItem value={'17:20'}>17:20</MenuItem>
                    <MenuItem value={'18:40'}>18:40</MenuItem>
                    <MenuItem value={'19:20'}>19:20</MenuItem>
                    <MenuItem value={'20:40'}>20:40</MenuItem>
                </Select>
            </FormControl>
        </Stack>
        <Button sx={{height: '50px'}} variant="contained" onClick={() => navigate('../TicketBuyDetail')}>前往訂票</Button>
        </Paper>
    </Box>

    )
}

export default TicketBuyPage1;