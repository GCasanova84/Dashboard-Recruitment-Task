import * as React from 'react';
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { lightGreen, red } from '@mui/material/colors';

import { CustomButton } from './CustomButton';
import { OutlinedCustomButton } from './OutlinedCustomButton';
import { useForm } from '../../hooks/useForm';
import { editUser, addUser } from '../../actions/users';

export const Form = ({ user = {} }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCancel = () => {
        navigate('/dashboard')
    }

    const { handleSubmit, handleChange, data, errors } = useForm({
        validations: {
            name: {
                pattern: {
                    // eslint-disable-next-line no-useless-escape
                    value: '^[a-zA-Z\s]*',
                    message: "Invalid character",
                },
                required: {
                    value: true,
                    message: 'Name is required',
                },
            },
            email: {
                pattern: {
                    value: '.+@[A-Za-z]+[.][A-Za-z]+',
                    message: "Invalid Email",
                },
                required: {
                    value: true,
                    message: 'Email is required',
                },
            },
        },
        onSubmit: () => {
            if (Object.keys(user).length > 0) {
                dispatch(editUser(data))
                    .then(() => navigate('/dashboard'))
            } else {
                dispatch(addUser(data))
                    .then(() => navigate('/dashboard'))
            }
        },
        initialValues: {
            ...user
        },
    });

    return (
        <Card>
            <CardHeader title="Form" />
            <Divider />
            <CardContent sx={{ pl: 16, pr: 4, pt: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            value={data.name || ''}
                            error={errors.name ? true : false}
                            hiddenLabel
                            fullWidth
                            required
                            size='small'
                            id="name-input"
                            label="Name"
                            helperText={errors.name || ' '}
                            onChange={handleChange('name')}
                        />
                        <TextField
                            value={data.email || ''}
                            error={errors.email ? true : false}
                            hiddenLabel
                            fullWidth
                            required
                            size='small'
                            id="email-input"
                            label="Email"
                            helperText={errors.email || ' '}
                            onChange={handleChange('email')}
                        />
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <OutlinedCustomButton c={red} variant="outlined" onClick={handleCancel}>Cancel</OutlinedCustomButton>
                            <CustomButton c={lightGreen} variant="contained" type="submit">Submit</CustomButton>
                        </Stack>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );
}