var posts=["2025/03/16/Relative-vs-absolute-paths/","2025/03/14/snake-game/","2025/03/15/Request-forwarding-and-response-redirection/","2025/03/18/对于JDBC核心API的理解/","2025/03/11/hello-world/","2025/03/16/我要精通MySQL/","2025/03/16/推荐几个AI工具/","2025/03/17/某Python全栈一课通/","2025/03/16/简历模板合集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };