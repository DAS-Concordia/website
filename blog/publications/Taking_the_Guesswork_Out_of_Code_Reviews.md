---
title: Taking the Guesswork Out of Code Reviews
authors:
<<<<<<< HEAD
  name: S. Khatoonabadi
=======
  name: Hassan Khatoonabadi
>>>>>>> e78d872bfef5317b546a60ace9cdb832f6f6fd51
  title: Postdoctoral Researcher
  url: /members/hassan-khatoonabadi
---


Have you ever submitted a pull request (PR) and found yourself checking for an update like you're tracking a package that won't budge? We've all been there—that limbo where anticipation meets frustration. Meanwhile, maintainers are staring at a pile of PRs, trying to figure out which ones need their attention and support. 

What if we could take the guesswork out of the process? Imagine knowing when to expect a response or an update. It sounds challenging, but our study shows it's completely feasible.



### Cracking the Code on Response Times

<<<<<<< HEAD
**We used machine learning to predict two things:**

 1. How long it takes for a maintainer to respond to a PR.

 2. How long it takes for a contributor to reply back.
=======
We used machine learning to predict two things:

 **1. How long it takes for a maintainer to respond to a PR.**

 **2. How long it takes for a contributor to reply back.**
>>>>>>> e78d872bfef5317b546a60ace9cdb832f6f6fd51

Why does this matter? When contributors know what to expect, they can plan better and stay motivated. Maintainers, on the other hand, can detect delays, offer support where needed, and prioritize their workload. The result? A faster, smoother review process for everyone.

 

<<<<<<< HEAD
**So, How Did We Do It?**
=======
### So, How Did We Do It?
>>>>>>> e78d872bfef5317b546a60ace9cdb832f6f6fd51

We extracted 21 features spanning four key dimensions to model response times:

 1- **Project:** How busy are the maintainers? Have they been responsive lately?

 2- **Contributor:** Does the contributor have a strong track record? Are they typically responsive?

 3- **PR:** How complex is the PR? Does it introduce big changes? When was it submitted?

 4- **Review Process:** When was the last review feedback given? How much activity has happened within the PR?

 

Using these features, we built machine learning models to predict response times—for both maintainers and contributors. The results? Remarkable! Our CatBoost models achieved up to 150% improvement in AUC-PR compared to baseline models across 20 large GitHub projects.

 

### Not Just for Big Projects

"But what about smaller projects?" you might ask. Even projects without an extensive history can benefit through cross-project prediction. By leveraging patterns from larger, established repositories, newer projects achieved surprisingly accurate predictions. This makes the approach useful for projects of all sizes.

 

### Tips for Faster PR Reviews

Here's how contributors can improve their chances of receiving quick feedback:

  1- **Time It Right:** Submit PRs on weekdays, especially early in the week, to take advantage of maintainers' higher availability.

  2- **Keep It Small:** Nobody likes tackling a huge PR. Bite-sized contributions are much easier to review.

  3- **Write Clear Descriptions:** Help maintainers quickly understand and evaluate your changes.

  4- **Build Trust:** A history of timely responses and quality contributions can help maintainers prioritize your PRs.

 

<<<<<<< HEAD
**For maintainers, the following tips can make a big difference:**
=======
For maintainers, the following tips can make a big difference:
>>>>>>> e78d872bfef5317b546a60ace9cdb832f6f6fd51

 1- **Respond Quickly:** Timely initial feedback can prevent delays from spiraling into a ripple effect that slows everything down.

 2- **Be Strategic with Timing:** Reviews on weekdays, especially earlier in the week, often get faster follow-ups.

 3- **Support Newbies:** Quick, supportive responses to newcomers keep them engaged and contribute to a healthy project ecosystem.

 

### The Road Ahead: More Than Predictions

Predicting response times is just the beginning. Imagine a tool that not only forecasts waiting times but also warns about potential delays before they happen. Better yet, what if it provided actionable recommendations to speed things up? By identifying and addressing potential delays proactively, this kind of tool could significantly enhance collaboration and developer experience.

 

### Join the Conversation

Want to learn more? Check out our study, published in IEEE Transactions on Software Engineering (August 2024). You can find a preprint here: https://www.researchgate.net/publication/383108411_Predicting_the_First_Response_Latency_of_Maintainers_and_Contributors_in_Pull_Requests

 

<<<<<<< HEAD
At the end of the day, PRs are more than just a bunch of code changes: They're a reflection of human collaboration and challenges. Let's connect and discuss how we can further enhance this process for our community.
=======
**At the end of the day, PRs are more than just a bunch of code changes: They're a reflection of human collaboration and challenges. Let's connect and discuss how we can further enhance this process for our community.**
>>>>>>> e78d872bfef5317b546a60ace9cdb832f6f6fd51
