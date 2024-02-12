import Image from "next/image";
import skillImage from "./skill.jpg"
import styles from "./skill.module.css"
import { leagueSpartan, sawarabiMicho } from "../fonts";


const Page = () => {
    return <>
        <h1 className={leagueSpartan.className + " " + styles.title}>SKILL</h1>
        <div className={styles.wrapper}>
            <Image src={skillImage} alt="profile image" width={400} height={400} className={styles.profileimage}/>
            <article className={styles.maintext + " " + sawarabiMicho.className}>
                <p>使える技術</p>
                <p>Skill</p>
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>React, Next.js</li>
                    <li>Vue.js</li>
                    <li>laravel</li>
                    <li>Python, numpy, scikit-learn</li>
                    <li>Qiskit, Q#, Pennylane</li>
                </ul>
                <br/>
                <p>興味がある分野</p>
                <p>Areas of interest</p>
                <ul>
                    <li>量子コンピュータ quantum computer</li>
                    <li>量子情報 quantum information</li>
                    <li>統計的学習理論 statistic learning theory</li>
                    <li>応用圏論 applied category theory</li>
                </ul>
                <br/>
                <p>読んだ本</p>
                <p>Book shelf</p>
                <ul>
                    <li>Quantum computing and quantum information</li>
                    <li>動かして学ぶ量子コンピュータプログラミング</li>
                    <li>白と黒のとびら</li>
                    <li>ファインマン計算機科学</li>
                    <li>計算理論の基礎</li>
                    <li>コンピュータシステムの理論と実装</li>
                    <li>コンピュータの構成と設計</li>
                    <li>暗号技術入門</li>
                    <li>線形代数の世界</li>
                    <li>現代の量子力学入門</li>
                    <li>量子力学10講</li>
                    <li>量子論の基礎</li>
                    <li>etc...</li>
                </ul>
            </article>
        </div>
    </>
};

export default Page;