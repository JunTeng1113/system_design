import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
    useNavigate,
    useParams
} from 'react-router-dom';
import Service from './service.js';

function TicketFinishedDetail(props) {
    let { tradeNumber } = useParams();
    let navigate = useNavigate();
    const [data, setData] = useState();
    const { steps, rows } = props;

    useEffect(() => {
        Service.get(tradeNumber).on("value", function (snapshot) {
            setData(snapshot.val());
        })
    }, [])

    return (
        <> {data && 
        
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
                <Stepper activeStep={3} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
                </Stepper>
            </Box>
            <Typography sx={{textAlign: 'center', mb: '20px', mt: '10px'}} variant='h5'>訂票明細</Typography>
            <Box sx={{ minWidth: 120 }}>
                
                <Box sx={{my: 2, p: 2, display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                    時間：{data.tradeDateTime}
                    </Box>
                    <Box>
                    交易編號：{tradeNumber}
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 480 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>項目</TableCell>
                        <TableCell align="center">單價</TableCell>
                        <TableCell align="center">數量</TableCell>
                        <TableCell align="right">價格</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* 顯示電影票 */}
                    {data.tickets && Object.entries(data.tickets).map((item) => (
                        <TableRow
                        key={item[0]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {item[0]}
                        </TableCell>
                        <TableCell align="center">{item[1].price}</TableCell>
                        <TableCell align="center">{item[1].amount}</TableCell>
                        <TableCell align="right">{item[1].price * item[1].amount}</TableCell>
                        </TableRow>
                    ))}
                    {/* 顯示餐點品項 */}
                    {data.meals && Object.entries(data.meals).map((item) => (
                        <TableRow
                        key={item[0]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {item[0]}
                        </TableCell>
                        <TableCell align="center">{item[1].price}</TableCell>
                        <TableCell align="center">{item[1].amount}</TableCell>
                        <TableCell align="right">{item[1].price * item[1].amount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <Box>
                <Box sx={{my: 2, p: 2, display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                    電影： {data.movie}<br/>
                    場次： {data.date} {data.time} <br/>
                    座位： {JSON.stringify(data.seats)}
                    </Box>
                    <Box>
                    總計： {data.total} 元
                    </Box>
                </Box>
    
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', py: '10px'}}>
                <Box>
                <Button sx={{height: '50px', width: '150px'}} variant="outlined"  color="error" onClick={() => navigate('../Record')}>退票</Button>
                <FormHelperText id="filled-weight-helper-text">*距放映日三天以上可全額退票</FormHelperText>
                </Box>
                <Button sx={{height: '50px', width: '150px'}} variant="contained" onClick={() => navigate('../Record')}>完成</Button>
            </Box>
            </Paper>
        </Box>
        } </>
    )
}

export default TicketFinishedDetail;