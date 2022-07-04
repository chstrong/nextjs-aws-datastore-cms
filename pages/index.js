import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DataStore } from '@aws-amplify/datastore';
import { Post } from '../models';

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    //console.log("logging")
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Post)
      setPosts(postData)
    }

    DataStore.observe(Post).subscribe(() => {
      fetchPosts()
    });
  }, [])

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <a>
            <h2>{post.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  )
}
