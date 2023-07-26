import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { age } from "@/utils/getAge";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Olá, 😁 eu sou Welyson Rosa!</p>
      </div>

      <div className={styles.center}>
        <div>
          <Link href="https://www.linkedin.com/in/welysonrosa/" target="_blank">
            <Image
              className={styles.logo}
              src="/linkedin.svg"
              alt="linkedin page"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link href="https://github.com/WelysonSR" target="_blank">
            <Image
              className={styles.logo}
              src="/github.svg"
              alt="github page"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1TAjvlSJiflyT1F-TR6mslpQQncjZ8eQF/view?usp=sharing"
            target="_blank"
          >
            <Image
              className={styles.logo}
              src="/documento.svg"
              alt="currículo page"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
        <h1>Full Stack Developer</h1>
        <div className={styles.container_sobre}>
          <p>
            Tenho {age(1996, 3)} anos sou formado em analise e desenvolvimento de sistemas,
            e tenho curso técnico em desenvolvimento web.
            É conhecimento sobre os principais conceitos e serviços da nuvem AWS.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
