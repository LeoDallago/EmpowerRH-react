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
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 400,
        padding: 10,
        margin: 20,
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
                                <Typography variant="h5">
                                    Nome: {resultados.name}
                                </Typography>
                                <Typography variant="h5">
                                    Nascimento:{resultados.birthday}
                                </Typography>
                                <Typography variant="h5">
                                    Telefone: {resultados.phone}
                                </Typography>
                                <Typography variant="h5">
                                    Estado Civil: {resultados.marital_status}
                                </Typography>
                                <Typography variant="h5">
                                    Cargo: {resultados.responsibility}
                                </Typography>
                                <Typography variant="h5">
                                    Departamento: {resultados.department}
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