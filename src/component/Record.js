import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
    useNavigate,
} from 'react-router-dom';
import Service from './service.js';

// import datas from '../datas/database.json';
function Record(props) {
    let navigate = useNavigate();
    const [datas, setDatas] = useState({});
    
    useEffect(() => {
        Service.getAll().on("value", function (snapshot) {
            setDatas(snapshot.val());
        })
    }, [])
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
            <Box sx={{ minWidth: 120 }}>
            <Typography sx={{textAlign: 'center', mb: '20px'}} variant='h5'>訂票紀錄</Typography>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>交易編號</TableCell>
                        <TableCell align="left">交易日期</TableCell>
                        <TableCell align="center">狀態</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Object.entries(datas).map((data) => (
                        <TableRow
                        key={data[0]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {data[0]}
                        </TableCell>
                        <TableCell align="left">{data[1].tradeDateTime}</TableCell>
                        <TableCell align="center"><Button onClick={() => navigate(`../TicketFinishedDetail/${data[0]}`)}>詳細</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', py: '5px', pt: '20px'}}>
                <Button sx={{height: '50px', width: '150px'}} variant="contained" onClick={() => navigate('../')}>返回</Button>
            </Box>
            </Paper>
        </Box>
    )
}
    
export default Record;