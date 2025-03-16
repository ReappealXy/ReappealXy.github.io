var posts=["2025/03/16/Relative-vs-absolute-paths/","2025/03/14/snake-game/","2025/03/11/hello-world/","2025/03/15/Request-forwarding-and-response-redirection/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };