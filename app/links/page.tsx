import Image from "next/image";
import linksImage from "./links.jpg"
import styles from "./links.module.css"
import { leagueSpartan, sawarabiMicho } from "../fonts";

const Page = () => {
    return <>
        <h1 className={styles.title}>LINKS</h1>
        <div>
            <Image src={linksImage} alt="link" width={400} height={400}/>
            <div>
                
            </div>
        </div>
    </>
};

export default Page;