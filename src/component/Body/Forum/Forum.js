import React, { useEffect } from 'react';

import './Forum.css';

import ForumBody from './ForumBody';
import ForumNavigator from './ForumNavigator';
import Commercial from './Commercial';

import Modal from '@material-ui/core/Modal';
import {
    useLocation,
    useHistory,
} from "react-router-dom";

function Forum(props) {

    let history = useHistory();
    let location = useLocation();

    const { state = {} } = location;
    const { modal } = state;

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (modal) {
            handleOpen();
            console.log("open");
        }
    }, [modal])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        history.goBack();
        console.log(location.pathname);
    };

    const body = (
        <div >
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
            {/* <Forum /> */}
        </div>
    );

    return (
        <div className="forum__container">

            <ForumNavigator />
            <ForumBody />
            <Commercial />

            { modal && <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>}

        </div>
    );

}

export default Forum;