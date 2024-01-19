import Link from "next/link"

type Props = {
    itemName: string;
    itemNumber: number;
}

export const NavItem = ({ itemName, itemNumber }: Props) => {
    return (
        <Link href={"/" + itemName} id={"item" + itemNumber}>{itemName}</Link>
    );
}