var posts=["2025/03/27/学习资料/学习通自动刷题/","2025/03/28/学习/Char和Character/","2025/03/19/学习/ORM思想/","2025/03/11/学习/hello-world/","2025/03/15/学习/Request-forwarding-and-response-redirection/","2025/03/14/学习/snake-game/","2025/04/07/学习/translate-helper/","2025/03/16/学习/Relative-vs-absolute-paths/","2025/03/25/学习/JDK、JRE、JVM关系与区别/","2025/03/28/学习/Integer和int/","2025/03/23/生活/什么东西/","2025/04/03/生活/天才啊/","2025/04/06/生活/螺蛳粉火锅好好吃！我要每天都吃螺蛳粉！！！/","2025/03/26/生活/chatgpt降智了吗？/","2025/03/18/学习/对于JDBC核心API的理解/","2025/03/25/每日一题/1071-字符串的最大公因子/","2025/03/23/每日一题/1431-拥有最多糖果的孩子/","2025/04/06/每日一题/209-长度最小的子数组/","2025/04/05/每日一题/1863-找出所有子集的异或总和再求和/","2025/03/30/每日一题/2109-向字符串添加空格/","2025/04/01/每日一题/2140-解决智力问题/","2025/03/31/每日一题/2278-字母在字符串中的百分比/","2025/03/29/每日一题/239-滑动窗口最大值/","2025/03/28/每日一题/2716-最小化字符串长度/","2025/04/02/每日一题/2873-有序三元组中的最大值-I/","2025/04/03/每日一题/2874-有序三元组的最大值II/","2025/04/08/每日一题/3396-使数组元素互不相同所需的最少操作次数/","2025/04/07/每日一题/416-分割等和子集/","2025/03/27/每日一题/438-找到字符串中所有字母异位词/","2025/03/26/每日一题/605-种花问题/","2025/03/24/每日一题/643-子数组最大平均数I/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };