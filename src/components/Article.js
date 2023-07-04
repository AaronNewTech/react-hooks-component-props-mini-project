import React from "react";
// ☕️
// 🍱
function Article({ id, title, date, preview, minutes }) {
  //   console.log(title);
  let mug;
  let bento;

  if (date === undefined) {
    date = "January 1, 1970";
  }

  if (minutes < 30) {
    if (minutes < 6) {
      mug = "☕️";
    } else if (minutes < 11) {
      mug = "☕️☕️";
    } else if (minutes < 16) {
      mug = "☕️☕️☕️";
    } else if (minutes < 21) {
      mug = "☕️☕️☕️☕️";
    } else if (minutes < 26) {
      mug = "☕️☕️☕️☕️☕️";
    } else {
      mug = "☕️☕️☕️☕️☕️☕️";
    }
  }

  if (minutes > 29) {
    if (minutes === 30) {
      bento = "🍱🍱🍱";
    } else if (minutes < 41) {
      bento = "🍱🍱🍱🍱";
    } else if (minutes < 51) {
      bento = "🍱🍱🍱🍱🍱";
    } else if (minutes < 61) {
      bento = "🍱🍱🍱🍱🍱🍱";
    } else {
      bento = "🍱🍱🍱🍱🍱🍱🍱";
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      {date && minutes < 30 ? (
        <small>
          {date} {mug} {minutes} min read
        </small>
      ) : (
        <small>
          {date} {bento} {minutes} min read
        </small>
      )}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
