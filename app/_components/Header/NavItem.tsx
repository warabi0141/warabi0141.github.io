import Link from "next/link";
import styles from "./NavItem.module.css"
import { leagueSpartan } from "../../fonts";

type Props = {
    itemName: string;
    itemNumber: number;
}

export const NavItem = ({ itemName, itemNumber }: Props) => {
    return (
        <Link href={"/" + itemName} id={"item" + itemNumber} className={leagueSpartan.className + " " + styles.navitems}>{itemName}</Link>
    );
}