import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'Styles/Home.module.css'

type HeadProps = {
    metaTitle: string
    metaDesc: string
    metaLink: string
}
const Home: NextPage = () => {
    return (
        // <div className={styles.container}>
        <>
            <MetaProps
                metaTitle="Nessi's Neuggets"
                metaDesc='A place to share your thoughts and ideas.'
                metaLink='https://nessisneuggets.com/'
            />
            <main className={styles.main}>
                {/* <Image
                    className={styles.logo}
                    layout='fill'
                    alt="nessi's neuggets logo"
                    src='/assets/logo.svg'
                /> */}
                <section className={styles.description}>
                    <figure>
                        <img
                            src='https://picsum.photos/id/237/200/300'
                            // layout='fill'
                            alt='A random image'
                        />
                        <figcaption>A random image</figcaption>
                    </figure>
                    <h3>About The Developer</h3>
                    <article>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam ullam asperiores culpa corporis!
                    </article>
                </section>
                <section className={styles.grid}>
                    <article className={styles.card}>
                        <h3>Tech Stack</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </article>
                    <article className={styles.card}>
                        <h3>Featured Projects</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </article>
                    <article className={styles.card}>
                        <h3>Where to see my work</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <ul className='blog'>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </ul>
                    </article>
                    <article className={styles.card}>
                        <h3>Testimonials</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </article>
                    <article className={styles.card}>
                        <h3>Work with me</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt similique veritatis quidem est harum
                            tempora. Fuga molestias atque repudiandae placeat,
                            voluptatum illum, delectus libero similique
                            consectetur autem explicabo, magni odio.
                        </p>
                        {/* <SiteForm /> */}
                    </article>
                </section>
            </main>
        </>
    )
}

export default Home
function MetaProps({ metaTitle, metaDesc, metaLink }: HeadProps) {
    return (
        <Head>
            <title className={metaTitle}>{metaTitle}</title>
            <meta className={metaDesc} content={metaDesc} />
            <link className={metaLink} href={metaLink} />
        </Head>
    )
}
