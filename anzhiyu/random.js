var posts=["2025/03/11/hello-world/","2025/03/14/snake-game-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };