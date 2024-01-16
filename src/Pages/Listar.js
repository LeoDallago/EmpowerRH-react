import React, { useEffect, useState } from "react";
import {
    Typography,
    makeStyles,
    Card,
    CardContent,
    Grid,
} from "@material-ui/core";

import Header from "../Partials/Header";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        width: 400,
        padding: 10,
        marginBottom: 20,
    },
}))


function Listar() {
    const classes = useStyles()
    const [estado, setEstado] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/api/employees`)
            .then(response => response.json())
            .then(data => {
                setEstado(data)
                console.log(data)
            })
    }, [])


    return (

        <div>
            <Header />

            <Grid container className={classes.root}>
                {
                    estado.map(estados => (
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>
                                    <h2>Nome: {estados.name}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Nascimento:{estados.birthday}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Telefone: {estados.phone}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Estado Civil: {estados.marital_status}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Cargo: {estados.responsibility}</h2>
                                </Typography>
                                <Typography>
                                    <h2>Departamento: {estados.department}</h2>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Listar