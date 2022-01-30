import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae repudiandae recusandae magni excepturi
                    reprehenderit non. Nihil sapiente, quam optio inventore quae
                    id quis ratione pariatur et natus ad quas consequatur.
                </p>
                <p className={styles.text}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae tempore labore reiciendis hic et delectus quia sunt
                    ex nam porro, placeat voluptates error, consequatur iste
                    dolor magni vero repellendus aperiam.
                </p>
                <Link href="/ninjas">
                    <a>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}
