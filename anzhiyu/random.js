var posts=["2025/03/25/学习/JDK、JRE、JVM关系与区别/","2025/03/19/学习/ORM思想/","2025/03/16/学习/Relative-vs-absolute-paths/","2025/03/15/学习/Request-forwarding-and-response-redirection/","2025/03/11/学习/hello-world/","2025/03/14/学习/snake-game/","2025/03/18/学习/对于JDBC核心API的理解/","2025/03/25/每日一题/1071-字符串的最大公因子/","2025/03/23/每日一题/1431-拥有最多糖果的孩子/","2025/03/26/每日一题/605-种花问题/","2025/03/26/生活/chatgpt降智了吗？/","2025/03/23/生活/什么东西/","2025/03/24/每日一题/643-子数组最大平均数I/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };