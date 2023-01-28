import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Copyright } from '../../components/Copyright';
import { useState } from 'react';


const theme = createTheme();

export const Register = () => {
  const [data, setData] = useState(null);
  const [isDoctor, setIsDoctor] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleSetDoctor = () => {
    setIsDoctor(!isDoctor)
  }

  return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> 
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField sx={{marginBottom: 1,}}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ФИО"
                  autoFocus
                />
             
              <DatePicker 
                label="Basic example"
                value={data}
                onChange={(newValue) => {
                setData(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                  <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField fullWidth ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                  </Grid>
                )}
                />
               <Grid item xs={12} sm={12} sx={{
                marginTop: -1,
              }}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Номер телефона"
                  name="lastName"
                  autoComplete="family-name"
                  margin="normal"
                />
              </Grid>
              {isDoctor ?   <Grid>
              <Grid item xs={12} sm={12} sx={{
                marginTop: -1, }}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Специализация"
                  name="lastName"
                  autoComplete="family-name"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={12} sx={{
                marginTop: -1, }}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Опыт работы"
                  name="lastName"
                  autoComplete="family-name"
                  margin="normal"
                />
              </Grid>
              </Grid>: <Grid item xs={12} sm={12} sx={{
                marginTop: -1, }}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Адрес"
                  name="lastName"
                  autoComplete="family-name"
                  margin="normal"
                />
              </Grid>}
              </Grid>
              <Grid item xs={12} sm={12} sx={{
                marginTop: -1,
              }}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                
                  <RadioGroup sx={{
                    
                  }}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
              
           
                <FormControlLabel value="female" control={<Radio />} label="Женский" />
                <FormControlLabel value="male" control={<Radio />} label="Мужской" />
          
              </RadioGroup>
              </Grid>
              <FormControlLabel control={<Switch onChange={handleSetDoctor} checked={isDoctor}/>} label="Вы доктор?" 
              sx={{
                marginLeft: 1,
                marginTop: 2,
              }} />
              <Grid item xs={12}>
              
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Регистрация
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Уже есть аккаунт? Войдите!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}






















