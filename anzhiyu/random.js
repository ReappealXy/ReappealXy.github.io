var posts=["2025/03/19/ORM思想/","2025/03/23/1431-拥有最多糖果的孩子/","2025/03/11/hello-world/","2025/03/16/Relative-vs-absolute-paths/","2025/03/14/snake-game/","2025/03/15/Request-forwarding-and-response-redirection/","2025/03/23/什么东西/","2025/03/18/对于JDBC核心API的理解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };