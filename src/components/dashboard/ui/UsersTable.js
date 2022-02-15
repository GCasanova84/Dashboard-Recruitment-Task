import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { red, amber, blue, deepOrange, blueGrey } from '@mui/material/colors';
import { CustomButton } from '../../ui/CustomButton';
import { useDeleteUserMutation } from '../../../services/users';

export const UsersTable = ({ users }) => {

    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState({});

    const handleClickOpen = (e) => {
        setOpen(true);
        setUserId(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleEdit = (user) => {
        navigate(`/dashboard/edit/user_${user.id}`, { state: { user: user } })
    }

    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async () => {
        await deleteUser(userId)
        handleClose()
    }

    const handleAdd = () => {
        navigate('/dashboard/add_user')
    }

    console.log(users);

    return (
        <>
            <Card>
                <CardHeader
                    action={
                        <CustomButton c={blue} variant="contained" onClick={handleAdd}>Add new</CustomButton>
                    }
                    title="User List"
                />
                <Divider />
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell align="center">name</TableCell>
                                    <TableCell align="center">username</TableCell>
                                    <TableCell align="center">email</TableCell>
                                    <TableCell align="center">city</TableCell>
                                    <TableCell align="center">edit</TableCell>
                                    <TableCell align="center">delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow
                                        key={user.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {user.id}
                                        </TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                        <TableCell align="center">{user.username || '--'}</TableCell>
                                        <TableCell align="center">{user.email}</TableCell>
                                        <TableCell align="center">{user.address?.city || '--'}</TableCell>
                                        <TableCell align="center">
                                            <CustomButton variant="contained" c={amber} onClick={() => handleEdit(user)}>edit</CustomButton>
                                        </TableCell>
                                        <TableCell align="center">
                                            <CustomButton variant="contained" c={red} value={user.id} onClick={handleClickOpen}>delete</CustomButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete"}
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <Divider />
                <DialogActions>
                    <CustomButton variant="contained" c={blueGrey} onClick={handleClose}>Cancel</CustomButton>
                    <CustomButton variant="contained" c={deepOrange} onClick={handleDelete} autoFocus>
                        Delete
                    </CustomButton>
                </DialogActions>
            </Dialog>
        </>
    );
}