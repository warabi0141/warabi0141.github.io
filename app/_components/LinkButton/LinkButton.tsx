import Image from "next/image";
import Link from "next/link";
import styles from "./LinkButton.module.css";

type Props = {
    href: string;
    imagepath: string;
    alt: string;
    text: string;
};

export const LinkButton = ({ href, imagepath, alt, text }: Props) => {
    return (
        <div className={styles.linkbuton}>
            <Image src={imagepath} alt={alt} className={styles.icon}/>
            <Link href={href}>{text}</Link>
        </div>
    )
}