import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const OutlinedCustomButton = styled(Button)(({ c }) => ({
    minWidth: 100,
    textTransform: 'none',
    color: c[500],
    borderColor: c[500],
    '&:hover': {
        borderColor: c[700],
        color: c[700],
    },
}));