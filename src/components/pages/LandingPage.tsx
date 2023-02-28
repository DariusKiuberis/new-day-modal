import { FC, useState } from 'react'
import { Button, Modal } from '@mantine/core';
import { useStyles } from './styles'

interface Props { }

const LandingPage: FC<Props> = ({ }) => {
    const { classes } = useStyles();

    const [opened, setOpened] = useState(false);

    return (

        <div className={classes.container}>
            <Modal
                classNames={{ modal: classes.modal }}
                withCloseButton={false}
                centered
                opened={opened}
                onClose={() => setOpened(false)}
                size="70%"
                transition="fade"
                transitionDuration={600}
                transitionTimingFunction="ease"
            >
                <Button
                    className={classes.openButton}
                    onClick={() => setOpened(false)}
                    variant="default"
                >

                    Close modal
                </Button>
            </Modal>
            <Button
                className={classes.openButton}
                onClick={() => setOpened(true)}
                variant='default'
            >
                Open modal
            </Button>
        </div >
    )
}

export default LandingPage

