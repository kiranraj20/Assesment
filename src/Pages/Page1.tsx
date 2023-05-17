import {Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



interface I_RegistrationFormData {
    Name?: string,
    PhoneNumber?: number | null,
    Email?: string,
}



const Page1 = () => {


    const initialValues : I_RegistrationFormData = { Name:"", PhoneNumber:null, Email: ""};
    const [formValues, setFormValues] = useState<any>(initialValues);
    const [formErrors, setFormErrors] = useState<any>({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit: any = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values: { Name: any; Email?: string; PhoneNumber?: string;}) => {
        const errors:any ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Name) {
            errors.Name = 'Name is required!';
        }
        if (!values.Email) {
            errors.Email = 'Email is required!';
        }else if (!regex.test(values.Email)) {
            errors.Email = "This is not a valid Email format!";
        }
        if (!values.PhoneNumber) {
            errors.PhoneNumber = 'PhoneNumber is required!';
        }
        return errors;
    };

    const navigate = useNavigate();

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            localStorage.setItem('Values', JSON.stringify(formValues))
            navigate({
                pathname: '/Page2',
                search:''
            })
        }else{
            localStorage.removeItem('Values')
            setIsSubmit(false)
        }
    },)
    

  return (
    <div>
        <Box
            component="form"
            flexDirection='column'
            justifyContent="center" 
            alignItems="center"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            autoComplete="off"
        >
            <Grid container spacing={2} minHeight={500}>
                <Grid xs display="flex" justifyContent="center" alignItems="center" flexDirection='column'>
                    <TextField
                        required
                        name='Name'
                        label="Name"
                        variant="standard"
                        value={formValues.Name}
                        onChange={handleChange}
                        helperText={formErrors.Name}
                    />
                    <TextField
                        required
                        type='number'
                        name='PhoneNumber'
                        label="PhoneNumber"
                        variant="standard"
                        value={formValues.PhoneNumber}
                        onChange={handleChange}
                        helperText={formErrors.PhoneNumber}
                    />
                    <TextField
                        required
                        type='email'
                        name='Email'
                        label="Email"
                        variant="standard"
                        value={formValues.Email}
                        onChange={handleChange}
                        helperText={formErrors.Email}
                    />
                    <Stack spacing={2} direction="row" marginTop={2}>
                        <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Page1;