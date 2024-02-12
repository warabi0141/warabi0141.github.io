import Image from "next/image";
import Link from "next/link";
import linksImage from "./links.jpg";
import githubImage from "./github-mark.png";
import xlogoImage from "./logo-white.png";
import noteImage from "./square.png";
import styles from "./links.module.css";
import { leagueSpartan } from "../fonts";

const Page = () => {
    return <>
        <h1 className={styles.title + " " + leagueSpartan.className}>LINKS</h1>
        <div className={styles.wrapper}>
            <Image src={linksImage} alt="profile image" className={styles.profileimage}/>
            <div className={styles.linkswrapper}>
                <Link href="https://github.com/warabi0141" className={leagueSpartan.className + " " + styles.linkbutton + " " + styles.white}>
                        <Image src={githubImage} alt="github mark" />
                        <span>GitHub(@warabi0141)</span>
                </Link>
                <Link href="https://twitter.com/inu__warabi" className={leagueSpartan.className + " " + styles.linkbutton + " " + styles.black}>
                    <Image src={xlogoImage} alt="x logo" />
                    <span>X(@inu__warabi)</span>
                </Link>
                <Link href="https://note.com/warabi1729" className={leagueSpartan.className + " " + styles.linkbutton + " " + styles.white}>
                    <Image src={noteImage} alt="note logo" />
                    <span>Note(@warabi1729)</span>
                </Link>
            </div>
        </div>
    </>
};

export default Page;