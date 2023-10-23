import React from "react";
import Article from "./Article";


function ArticleList({posts}) {
    const newPosts = posts.map((post) => {
      return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} time={post.minutes} />

    })
  
    return (
      <main>
        {newPosts}
      </main>
    )
        
  }

export default ArticleList;