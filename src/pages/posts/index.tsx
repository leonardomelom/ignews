import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from './styles.module.scss'
import { createClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}

interface PostsProps{
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
   <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>

    <main className={styles.container}>
        <div className={styles.postList}>
         {posts.map(post =>(
           <a key={post.slug} href="">
           <time>
             {post.updatedAt}
           </time>
           <strong>
           {post.title}
           </strong>
           <p>
           {post.excerpt}
           </p>
         </a>
         ))}
       
        </div>
    </main>
   </>   
  )
}



export async function getStaticProps({ previewData }:any) {
  const client = createClient({ previewData })
  
  const page = await client.getAllByType('post')
  const posts = page.map((post)=>{
    return{
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find((content:any) => content.type = 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
          day: '2-digit',
          month: 'long',
          year: 'numeric'
      })
    }
  })
  return {
    props: {
      posts
    },
  }
}
