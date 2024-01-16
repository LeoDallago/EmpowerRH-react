import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    makeStyles,
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    Card,
    CardContent,
} from "@material-ui/core";

import Header from "../Partials/Header";

const useStyles = makeStyles(() => ({
    card: {
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

function Remover() {
    const [open, setOpen] = useState(false)
    const [alert, setAlert] = useState(false)
    const [name, setName] = useState('')

    const classes = useStyles()

    const toggleOpen = () => {
        setOpen(true)
    }

    const toggleClose = () => {
        setOpen(false)
    }

    const handleSend = () => {

        fetch('http://localhost:8080/api/employees', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
            }),
        })

        setAlert(true)
        setOpen(false)
    }

    const toggleCLoseAlert = () => {
        setAlert(false)
    }

    return (
        <div>
            <Header />

            <Container maxWidth='xs'>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5">Remover Funcionario</Typography>
                        <TextField id="standard-basic" label="Nome" value={name} onChange={e => setName(e.target.value)} className={classes.textField} />
                        <TextField id="standard-basic" label="Cargo" className={classes.textField} />
                    </CardContent>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={toggleOpen}>Remover</Button>
                </Card>

                <Dialog
                    open={open}
                    onClose={toggleClose}
                >
                    <DialogTitle>
                        Atenção
                    </DialogTitle>
                    <DialogContentText>
                        Deseja remover este Funcionario?
                    </DialogContentText>
                    <DialogActions>
                        <Button variant="contained" color="secondary" onClick={handleSend}>sim</Button>
                        <Button variant="contained" color="secondary" onClick={toggleClose}>não</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={alert}
                    onClose={toggleCLoseAlert}
                >
                    <DialogTitle>
                        Atenção
                    </DialogTitle>
                    <DialogContentText>
                        Usuario removido
                    </DialogContentText>
                    <DialogActions>
                        <Button variant="contained" color="secondary" onClick={toggleCLoseAlert}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    )
}

export default Remover