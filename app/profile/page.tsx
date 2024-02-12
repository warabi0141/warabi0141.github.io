import Image from "next/image";
import profileImage from "./profile.jpg"
import styles from "./profile.module.css"
import { leagueSpartan, sawarabiMicho } from "../fonts";


const Page = () => {
    return <>
        <h1 className={leagueSpartan.className + " " + styles.title}>PROFILE</h1>
        <div className={styles.wrapper}>
            <Image src={profileImage} alt="profile" width={400} height={400} className={styles.profileimage}/>
            <article className={styles.maintext + " " + sawarabiMicho.className}>
                <p>長谷川 駿</p>
                <p>Shun Hasegawa</p>
                <br />
                <p>東京工業大学 情報理工学院</p>
                <p>Tokyo Institute of Technology School of Computing</p>
                <br />
                <p>数理計算科学系 B2</p>
                <p>Department of Mathematical and Computing Science B2</p>
                <br />
            </article>
        </div>
    </>
};

export default Page;