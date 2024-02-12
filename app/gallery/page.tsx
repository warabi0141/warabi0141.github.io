import Image from "next/image";
import galleryImage from "./gallery.jpg"
import styles from "./gallery.module.css"
import { leagueSpartan, sawarabiMicho } from "../fonts";


const Page = () => {
    return <>
        <h1 className={leagueSpartan.className + " " + styles.title}>GALLERY</h1>
        <div className={styles.wrapper}>
            <Image src={galleryImage} alt="profile" width={400} height={400} className={styles.profileimage}/>
            <article className={styles.maintext + " " + sawarabiMicho.className}>
                <p>Coming soon...</p>
            </article>
        </div>
    </>
};
export default Page;