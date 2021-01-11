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
    useParams,
} from "react-router-dom";

function Forum(props) {

    let { id } = useParams();
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

            { ((modal === undefined || modal === false) && id !== undefined) && <PostModal handleCloseButton={handleClose} />}
            { (modal === undefined && id === undefined) && < ForumBody />}
            { (modal !== undefined && id !== undefined) && < ForumBody />}

            <Commercial />

            { modal &&
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <PostModal handleCloseButton={handleClose} />
                </Modal>
            }

        </div>
    );

}

export default Forum;