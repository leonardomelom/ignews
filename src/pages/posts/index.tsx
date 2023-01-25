import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from './styles.module.scss'
import { createClient } from '../../services/prismic'
export default function Posts() {
  return (
   <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
        <div className={styles.postList}>
          <a href="">
            <time>
              12 de março de 2023
            </time>
            <strong>
            Mastering TypeScript: 21 Best Practices for Improved Code Quality
            </strong>
            <p>
            TypeScript is a widely used, open-source programming language that is perfect for modern development. With its advanced type system, TypeScript allows developers to write code that is more robust, maintainable, and scalable.
            </p>
          </a>
          <a href="">
            <time>
              12 de março de 2023
            </time>
            <strong>
            Mastering TypeScript: 21 Best Practices for Improved Code Quality
            </strong>
            <p>
            TypeScript is a widely used, open-source programming language that is perfect for modern development. With its advanced type system, TypeScript allows developers to write code that is more robust, maintainable, and scalable.
            </p>
          </a>
          <a href="">
            <time>
              12 de março de 2023
            </time>
            <strong>
            Mastering TypeScript: 21 Best Practices for Improved Code Quality
            </strong>
            <p>
            TypeScript is a widely used, open-source programming language that is perfect for modern development. With its advanced type system, TypeScript allows developers to write code that is more robust, maintainable, and scalable.
            </p>
          </a>
        </div>
    </main>
   </>   
  )
}



export async function getStaticProps({ previewData }:any) {
  const client = createClient({ previewData })

  const page = await client.getSingle('post')
  console.log(JSON.stringify(page, undefined, 2))
  return {
    props: {
      page,
    },
  }
}
