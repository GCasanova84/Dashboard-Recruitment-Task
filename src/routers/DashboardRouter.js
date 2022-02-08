import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { getUsers } from '../actions/users';
import { DashboardPage } from '../components/dashboard/DashboardPage';
import { EditUserPage } from '../components/edit_user/EditUserPage';
import { AddUserPage } from '../components/add_user/AddUserPage';

export const DashboardRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h2" gutterBottom component="div">
                    Dashboard
                </Typography>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/dashboard/edit/*" element={<EditUser />} />
                    <Route path="/dashboard/add_user" element={<AddUserPage />} />
                </Routes>
            </Container>

        </BrowserRouter>
    )
}

export const EditUser = () => {

    return (
        <Routes>
            <Route path=":user" element={<EditUserPage />} />
        </Routes>
    )
}