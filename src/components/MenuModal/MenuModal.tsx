import { Menu } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import {createTheme} from '@material-ui/core/styles';
import {memo} from 'react';

type MenuModalProps = {
    children: any,
    anchorEl: HTMLElement | null,
    handleClose: () => void;
}

const theme = createTheme({
    shape: {
        borderRadius: 12
    },
    typography: {
        fontSize: 12
    },
    palette: {
        primary: {
            main: '#121212'
        }
    }
})

function MenuModal({ children, anchorEl, handleClose }: MenuModalProps) {
    // console.log("Menu Modal");

    return (
        <ThemeProvider theme={theme}>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted
            >
                {children}
            </Menu>
        </ThemeProvider>
    )
}

export default memo(MenuModal);
