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

    const classes = useStyles()

    return (
        <div>
            <Header />
            <Container maxWidth='xs'>
                <Card className={classes.card}>
                    <CardContent >
                        <Typography variant="h5">Solicitar férias</Typography>

                        <TextField id="standard-basic" label="Nome" name="name" className={classes.textfield} />
                        <TextField id="standard-basic" label="Cargo" name="name" className={classes.textfield} />
                        <TextField id="standard-basic" label="Setor" name="name" className={classes.textfield} />

                        <TextField id="data-inicial" label='Data de inicio' type="date" className={classes.textfield} InputLabelProps={{ shrink: true }} />
                        <TextField id="data-inicial" label='Data de termino' type="date" className={classes.textfield} InputLabelProps={{ shrink: true }} />


                    </CardContent>
                    <Button variant="contained" color="primary" className={classes.button}>Confirmar</Button>

                </Card>
            </Container>
        </div>
    )
}

export default Ferias