import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    makeStyles,
    Button,
    Card,
    CardContent,
    Grid,
} from "@material-ui/core";

import Header from "../Partials/Header";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        direction: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    card: {
        width: 400,
        padding: 10,
    },
    textField: {
        width: '90%',
    },
    button: {
        marginTop: '10px',
        width: '100%',
    },
}))


function Pesquisar() {
    const [nome, setNome] = useState('')
    const [resultado, setResultado] = useState([])
    const classes = useStyles()

    const handleSend = () => {
        fetch(`http://localhost:8080/api/employees/${nome}`)
            .then(response => response.json())
            .then(data => {
                setResultado(data)

            })
        console.log(resultado)
    }

    return (
        <div>
            <Header />
            <Container maxWidth='xs'>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5">
                            Pesquisa
                        </Typography>
                        <TextField id="standard-basic" label="Nome" value={nome} onChange={e => setNome(e.target.value)} className={classes.textField} />
                    </CardContent>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={handleSend}>Pesquisar</Button>
                </Card>
            </Container>


            <Grid container className={classes.root}>
                {
                    resultado.map(resultados => (
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>
                                    <h2>Nome: {resultados.name}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Nascimento:{resultados.birthday}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Telefone: {resultados.phone}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Estado Civil: {resultados.marital_status}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Cargo: {resultados.responsibility}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Departamento: {resultados.department}</h2>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Pesquisar