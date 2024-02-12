import Image from "next/image";
import blogImage from "./blog.jpg"
import styles from "./blog.module.css"
import { leagueSpartan, sawarabiMicho } from "../fonts";


const Page = () => {
    return <>
        <h1 className={leagueSpartan.className + " " + styles.title}>BLOG</h1>
        <div className={styles.wrapper}>
            <Image src={blogImage} alt="profile" width={400} height={400} className={styles.profileimage}/>
            <article className={styles.maintext + " " + sawarabiMicho.className}>
                <p>Coming soon...</p>
            </article>
        </div>
    </>
};
export default Page;