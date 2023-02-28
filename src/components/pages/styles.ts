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
        border: 'solid',
        fontSize: '1.5rem',
    },

    closeButton: {
        border: 'solid',
        fontSize: '1.5rem',
    },

    modal: {
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }

}));
