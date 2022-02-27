---
slug: why-do-developers-use-trivial-packages-npm
title: Have we forgotten how to program?
authors:
  name: Suhaib Mujahid
  title: Master's Student
  url: https://suhaib.ca
tags: [npm, trivial packages]
---

After the [left-pad](https://www.npmjs.com/package/left-pad) fiasco, David Haney’s blog post: “Have We Forgotten How to Program?”, lead to many heated discussions whether developers should take on dependencies for simple tasks. You can read the [post](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/) and the discussion that ensued for all the details, but to summarize it – a dependency on an 11 line package that implements a left padding string function was removed; this package was used by Babel, which is used by some of the largest Internet sites, e.g., Facebook, Netflix, and Airbnb. While the real reason for the left-pad incident was that npm allowed authors to unpublish packages (a problem which has been resolved), it raised awareness of the broader issue of taking on dependencies for trivial tasks that can be easily implemented.

Many developers agreed with Haney’s position, stating that every serious developer knows that “small modules are only nice in theory”, suggesting that developers should implement such functions themselves rather than taking on dependencies for trivial tasks. Others strongly voiced their position against Haney’s position, arguing that the way we code has ‘evolved’.

In any case, we found that many of the discussions were based on anecdotal evidence and opinions – so – like what any academic would do, we asked the same question as Haney, but took a more formal (i.e., empirical) route to answering the question. This blog post summarises what we found…

### What is a “trivial” package/dependency anyway?

First, we needed to define what is considered a “trivial” package, i.e., a package that is really not worth the extra dependency. We performed a survey and all the details are in the [technical paper](http://das.encs.concordia.ca/uploads/2017/07/Abdalkareem_FSE2017.pdf), but the main finding is that packages < 35 LOC & low code complexity values are considered to be trivial by developers.

We used our definition and examined all the npm packages we could get our hands on at the time (231,092 to be exact) to see if these “trivial” packages are only a few, or if indeed, there are many more such packages than just left-pad. Guess what – more than 38,000 npm packages are trivial!! That is, approximately 16.8% of the packages on npm – nope left-pad is not alone!

OK, now you would wish that was the end of it, but no! Not only are there many trivial packages, these trivial packages are popular as hell! In fact, 113 of the 1,000 most downloaded npm packages are trivial . Haney might just be right, maybe we did forget how to program.

### Well…they can’t be that bad then, can they?

I guess that depends on what you consider to be bad. I think that most developers know that depending on a trivial package adds some overhead to their project, but we were curious as to exactly how much overhead these trivial packages added. So, we measured the number of direct and indirect dependencies that these trivial npm packages required (and used). One may expect that given how little these packages typically do, very few should have any dependencies, and even the packages that do should have a few dependencies. We found that approximately half of the trivial packages have at least one dependency and more than 10% have 20 or more dependencies!!! This was not expected, and developer beware, some of those dependencies may not be worth taking.

### So, why do developers take on such overhead for these “trivial” tasks?

It turns out that developers do know how to program and have very specific reasons for why they decide to depend on trivial packages. We surveyed 88 Node.js developers that use these trivial packages and found that most of them decide to use a trivial package since such packages are considered to be well implemented and tested (and we are not talking about having tests, just the fact that these packages are often used by many, who probably helped iron out all the bugs, corner cases, etc). Another highly cited reason is the fact that developers find it more productive to just use a package that implements something than thinking about it themselves (or using code from StackOverflow, which God knows where it came from), which hints that perhaps the way we code has evolved. The full list of reasons and also drawbacks can be found in our recently accepted [technical paper](http://das.encs.concordia.ca/uploads/2017/07/Abdalkareem_FSE2017.pdf).

## Key take away

Perhaps we did not forget how to program and indeed the way we program has evolved (especially given how prevalent these trivial packages are)! That said, one has to be careful which trivial packages they use, since it seems – like everything else in life – there is no free lunch!
The full paper, which contains much more analysis and the detailed results of our work can be found in our technical paper.

_Last but not least, we are grateful to the many survey respondents who dedicated their valuable time to respond to our surveys and made this research possible._
