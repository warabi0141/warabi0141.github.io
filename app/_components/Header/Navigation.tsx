import { NavItem } from "./NavItem";
import styles from "./navigation.module.css"

type Props = {
    isOpen: boolean;
    id: string
};

export const Navigation = ({ isOpen, id }: Props) => {
    return (
        <ul id={id} className={styles.navigaiton + " " + (isOpen ? styles.active : "")}>
            <li>
                <NavItem itemName="profile" itemNumber={1}></NavItem>
            </li>
            <li>
                <NavItem itemName="links" itemNumber={2}></NavItem>
            </li>
            <li>
                <NavItem itemName="skill" itemNumber={3}></NavItem>
            </li>
            <li>
                <NavItem itemName="blog" itemNumber={4}></NavItem>
            </li>
            <li>
                <NavItem itemName="gallery" itemNumber={5}></NavItem>
            </li>
        </ul>
    );
};