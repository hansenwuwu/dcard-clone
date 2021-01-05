import React, { useEffect } from 'react';

import './Forum.css';

import ForumBody from './ForumBody';
import ForumNavigator from './ForumNavigator';
import Commercial from './Commercial';
import PostModal from './PostModal';

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
        }
    }, [modal])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        history.goBack();
    };

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
                <PostModal />
            </Modal>}

        </div>
    );

}

export default Forum;