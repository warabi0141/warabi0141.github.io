import { MouseEventHandler } from "react";
import styles from './togglebutton.module.css';

type Props = {
    isOpen: boolean;
    onClick: MouseEventHandler;
}

export const ToggleButton = ({ isOpen, onClick }: Props) => {
    return (
        <button type="button" onClick={onClick} className={styles.togglebutton + " " + (isOpen ? styles.active : "")} title="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
};