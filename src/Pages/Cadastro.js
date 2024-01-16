import React, { useState } from "react";

import Header from "../Partials/Header";
import {
    Container,
    Typography,
    TextField,
    MenuItem,
    makeStyles,
    Button,
    Card,
    CardContent
} from "@material-ui/core";


const generos = [
    {
        value: 'MASCULINO',
        label: 'MASCULINO',
    },
    {
        value: 'FEMININO',
        label: 'FEMININO',
    },
    {
        value: 'OUTRO',
        label: 'OUTRO',
    },
]

const estado_civil = [
    {
        value: 'SOLTEIRO',
        label: 'SOLTEIRO',
    },
    {
        value: 'CASADO',
        label: 'CASADO',
    },
    {
        value: 'DIVORCIADO',
        label: 'DIVORCIADO',
    },
    {
        value: 'VIUVO',
        label: 'VIUVO',
    },
]

const departamentos = [
    {
        value: 'ADMINISTRATIVO',
        label: 'ADMINISTRATIVO',
    },
    {
        value: 'FINANCEIRO',
        label: 'FINANCEIRO',
    },
    {
        value: 'ALMOXARIFADO',
        label: 'ALMOXARIFADO',
    },
    {
        value: 'FABRICA',
        label: 'FABRICA',
    },
]

const useStyles = makeStyles((theme) => ({

    card: {
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        width: '90%',
    },
    buttom: {
        marginTop: theme.spacing(2),
        width: '100%',
    }
}))


const Cadastro = () => {
    const [gender, setGender] = useState('');
    const [marital_status, setMarital] = useState('')
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [phone, setPhone] = useState('')
    const [responsibility, setResponsibility] = useState('')
    const [department, setDepartment] = useState('')

    const classes = useStyles()


    const handleSend = () => {
        fetch('http://localhost:8080/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                birthday,
                gender,
                phone,
                marital_status,
                responsibility,
                department,
            }),
        }).then(response => {
            response.json().then(data => {
                if (data.message === 'success') {
                    alert('Cadastro realizado com sucesso')
                } else {
                    alert('Cadastro não realizado')
                }
            })
        })

        console.log(name, gender, marital_status, birthday, phone, responsibility, department)
    }
    return (
        <div>
            <Header />
            <Container maxWidth='xs' >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5">Cadastrar Funcionario</Typography>
                        <TextField id="standard-basic" label="Nome" name="name" value={name} onChange={e => setName(e.target.value)} className={classes.textField} />
                        <TextField id="date" type="date" label="Data de nascimento" name="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} className={classes.textField} />
                        <TextField id="standard-basic" select label="Genero" name="gender" value={gender} onChange={e => setGender(e.target.value)} className={classes.textField}>
                            {generos.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="standard-basic" label="Telefone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} className={classes.textField} />
                        <TextField id="standard-basic" select label="Estado Civil" name="merital_status" value={marital_status} onChange={e => setMarital(e.target.value)} className={classes.textField}>
                            {estado_civil.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="standard-basic" label="Cargo" name="responsibility" value={responsibility} onChange={e => setResponsibility(e.target.value)} className={classes.textField} />
                        <TextField id="standard-basic" select label="Departamento" name="department" value={department} onChange={e => setDepartment(e.target.value)} className={classes.textField} >
                            {departamentos.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </CardContent>
                    <Button variant="contained" color="secondary" className={classes.buttom} onClick={handleSend}>Cadastrar</Button>
                </Card>
            </Container>


        </div>
    )
}

export default Cadastro