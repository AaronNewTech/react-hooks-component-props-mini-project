import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  // console.log(posts)
  const articleDisplay = posts.map((posts) => {
    return <Article key={posts.id} {...posts} />;
  });
  return <main>{articleDisplay}</main>;
}

export default ArticleList;
