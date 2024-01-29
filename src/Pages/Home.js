import React, { useState } from "react";
import {
    AppBar,
    Button,
    Card,
    Toolbar,
    Typography,
    Container,
    ButtonGroup,
    CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import BatteryCharging30RoundedIcon from '@material-ui/icons/BatteryCharging30Rounded';

const useStyles = makeStyles(() => ({
    toolBar: {
        display: 'flex',
        justifyContent: 'center',
    },
    textField: {
        marginTop: '200px',
        width: 600,
    },
    typography: {
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonGroup: {
        width: '100%',
    },
    icon: {
        margin: '5px',
    }
}))
const Home = () => {
    const classes = useStyles()
    const history = useHistory()

    const togglePage = route => {
        history.push(route)
    }

    return (
        <div>
            <AppBar>
                <Toolbar className={classes.toolBar}>
                    <Typography variant="h4">
                        EmpowerRH
                    </Typography>
                </Toolbar>
            </AppBar>


            <Container maxWidth='xs' className={classes.textField}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" className={classes.typography}>
                            Bem-vindo(a)
                        </Typography>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical outlined primary button group"
                            className={classes.buttonGroup}
                        >
                            <Button onClick={() => togglePage('/cadastro')}>
                                <PersonAddRoundedIcon fontSize="small" className={classes.icon} /> Cadastrar
                            </Button>
                            <Button onClick={() => togglePage('/remover')}>
                                <RemoveCircleOutlineRoundedIcon fontSize="small" className={classes.icon} />   Remover
                            </Button>
                            <Button onClick={() => togglePage('/pesquisar')}>
                                <SearchRoundedIcon fontSize="small" className={classes.icon} />  Pesquisar
                            </Button>
                            <Button onClick={() => togglePage('/listar')}>
                                <ListOutlinedIcon fontSize="small" className={classes.icon} />  Listar
                            </Button>
                            <Button onClick={() => togglePage('/ferias')}>
                                <BatteryCharging30RoundedIcon fontSize="small" className={classes.icon} />  Solicitar ferias
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </Container>
        </div >
    )
}

export default Home