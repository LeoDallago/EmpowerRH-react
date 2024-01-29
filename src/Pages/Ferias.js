import React, { useState } from "react";

import Header from "../Partials/Header";

import {
    Container,
    TextField,
    Typography,
    Button,
    makeStyles,
    Card,
    CardContent
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    textfield: {
        marginBottom: theme.spacing(2),
        width: '80%',
    },
    button: {
        width: '75%',
    },
}))

const Ferias = () => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [setor, setSetor] = useState('')
    const [inicio, setInicio] = useState('')
    const [termino, setTermino] = useState('')

    const classes = useStyles()

    const handleSend = () => {
        fetch('http://localhost:8080/api/ferias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                cargo,
                setor,
                inicio,
                termino,
            }),
        }).then(response => {
            response.json().then(data => {
                if (data.message === 'success') {
                    alert('Succeso')
                } else {
                    alert('erro!!')
                }
            })
        })
    }

    return (
        <div>
            <Header />
            <Container maxWidth='xs'>
                <Card className={classes.card}>
                    <CardContent >
                        <Typography variant="h5">Solicitar férias</Typography>

                        <TextField id="standard-basic" label="Nome" name="name" className={classes.textfield} value={nome} onChange={e => setNome(e.target.value)} />
                        <TextField id="standard-basic" label="Cargo" name="name" className={classes.textfield} value={cargo} onChange={e => setCargo(e.target.value)} />
                        <TextField id="standard-basic" label="Setor" name="name" className={classes.textfield} value={setor} onChange={e => setSetor(e.target.value)} />

                        <TextField id="data-inicial" label='Data de inicio' type="date" className={classes.textfield} InputLabelProps={{ shrink: true }} value={inicio} onChange={e => setInicio(e.target.value)} />
                        <TextField id="data-termino" label='Data de termino' type="date" className={classes.textfield} InputLabelProps={{ shrink: true }} value={termino} onChange={e => setTermino(e.target.value)} />


                    </CardContent>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleSend}>Confirmar</Button>

                </Card>
            </Container>
        </div>
    )
}

export default Ferias