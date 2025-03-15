var posts=["2025/03/15/Resource-sharing/","2025/03/14/snake-game/","2025/03/15/Request-forwarding-and-response-redirection/","2025/03/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };