import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)(({ c }) => ({
    minWidth: 100,
    textTransform: 'none',
    color: '#FFFFFF',
    backgroundColor: c[500],
    '&:hover': {
        backgroundColor: c[700],
    },
}));