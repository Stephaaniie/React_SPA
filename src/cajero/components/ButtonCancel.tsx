/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

import {
    Box,
    ButtonGroup,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Slide 
} from "@mui/material";

import { TransitionProps } from '@mui/material/transitions';
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const ButtonCancel: React.FC = () => {
    
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleCancelarClick = () => {
        setOpen(true);
    };

    const handleConfirm = () => {
        setOpen(false);
        navigate("auth/login", { replace: true });
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("auth/login", { replace: true });
        }, 30000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <>
            <Box sx={{ display: 'flex', '& > *': { m: 4 } }} display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingLeft={20}>
                <ButtonGroup variant="contained">
                    <Button key="cancel" onClick={handleCancelarClick}>Cancelar</Button>
                </ButtonGroup>
            </Box>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"¿Esta seguro que desea Cancelar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Al cancelar el proceso sera redireccionado a la paguina principal
                        para que pueda loguarse nuevamente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm}>Si</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
