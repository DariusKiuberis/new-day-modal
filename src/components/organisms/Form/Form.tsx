import { FC } from 'react';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useStyles } from './styles'

type FormProps = {
    myProp1?: string;
    myProp2?: number;
};

const Form: FC<FormProps> = (props) => {

    const { classes } = useStyles();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <div
            className={classes.container}
            data-testid='form'
        >
            <Box sx={{ maxWidth: 300 }} mx="auto">
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        className={classes.input}
                        withAsterisk
                        label="Password"
                        placeholder="Password"
                        {...form.getInputProps('password')}
                    />
                    <TextInput
                        withAsterisk
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        {...form.getInputProps('confirmPassword')}
                    />
                    <Checkbox
                        mt="md"
                        label="I agree to sell my privacy"
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />

                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>

        </div>
    )
};

export default Form;
