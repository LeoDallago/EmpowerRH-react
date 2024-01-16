import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(3),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



const Header = () => {
    const classes = useStyles();
    const history = useHistory()

    const togglePage = route => {
        history.push(route)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        EmpowerRH
                    </Typography>
                    <Button color='inherit' onClick={() => togglePage('/')}>Home</Button>
                    <Button color="inherit" onClick={() => togglePage('/cadastro')}>Cadastrar</Button>
                    <Button color="inherit" onClick={() => togglePage('/remover')}>Remover</Button>
                    <Button color="inherit" onClick={() => togglePage('/pesquisar')}>Pesquisar</Button>
                    <Button color="inherit" onClick={() => togglePage('/listar')}>Listar</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header