import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    openButton: {
        padding: theme.spacing.sm,
        border: `solid ${theme.colors.indigo[6]}`,
        fontSize: '1.5rem',
        color: theme.colors.indigo[6],
        width: 'auto',
        height: 'auto',

        '&:hover': {
            backgroundColor: theme.colors.indigo[6],
            color: 'white',
        },
    },

    modal: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    }

}));


