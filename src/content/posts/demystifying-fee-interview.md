---
title: "Demystifying the front end interview"
description: "Part 1 in a series on breaking the front end interview survival guide."
pubDate: "Nov 19 2024"
tags: ["career", "interview-prep"]
---

Portions:

1. Web fundamentals
2. Algorithms
3. Component building
4. System design

## Overview

Coding interviews are the worst. The 6 hours of onsite interviews are too long and the 60+ hours of studying required beforehand are certainly too long. However, the purpose of this article is _not_ to say that "coding interviews are broken"; in fact I think they are one of the last bastions holding back a swamp of nepotism from flooding the last bit of hope that tech is still a meritocracy (but that is a rant for another day). No, the purpose of this article is to say that while coding interviews mostly suck, front end interviews mostly suck the least.

## Breaking it down (sexual style... jk... unless 👀)

While traditional SDE roles requires a rigorous understanding of data structures and algorithms, and a solid grasp of system design, the front end interview requires these and also requires the interviewee to be ready for a barrage of JavaScript, CSS and esoteric browser quiz questions. Why does this make the interview better and not worse? The sheer breadth of knowledge required to pass the interview means that front end engineers don't _usually_ have to spend quite as much time grinding leetcode since the interview will be comparatively light on DSA compared to traditional SDE interviews. Instead, the interview shifts the focus to shit that front end engineers actually need to know to perform their job well. Preparing for a frontend interview is almost like an excuse to brush up on fundamentals and catch up on newer features and developments in the web dev ecosystem.

Before we continue, I do want to call out that since the front end role is relatively new, the interview is not totally standardized. Some companies' interviews will consist exactly of the components I'm about to lay out, and others will be traditional software engineer interviews. Even within the same company an interview for a front end role may be totally different from one interview to the next. For example, during my time at Amazon I've had the opportunity to be a part of a number of interview panels. In most cases, the panel is aligned with performing a more modern frontend interview, but I've met L6 engineers who will vehemently demand that the would be FEE receives the same interview experience as a would be SDE. For the record, Amazon (at least as far as I know as a lowly L5 who obviously doesn't speak on behalf of the company) expects FEE panels to be tailored to the FEE role so the aforementioned L6 was wrong and can eat shit.

Now that you know your mileage may vary, let's talk about the component parts of the FEE interview which are rapidly becoming the standard. I will do a short article on each of these as a part of this series, but to give a high level breakdown, the interview usually contains a mix of the following:

- **Web fundamentals:** JavaScript, browser, CSS and html questions. Basically, anything you could find in the [MDN docs](https://developer.mozilla.org/en-US/) is up for grabs. This includes everything from explaining the event loop to giving a quick demo on flex vs grid. This category is immense, so stay tuned for a further breakdown but at a high level, reviewing the aforementioned docs, reading up on [WGAC](https://www.w3.org/WAI/standards-guidelines/wcag/) standards, and practicing JS questions on a site like [bigfrontend.dev](https://bigfrontend.dev/) are all great ways to prepare for this portion of the interview.

- **Component building:** Designing (and typically implementing) web components, ranging from abstract "create a component to collect user reviews" to the more concrete "recreate this mock up in code". Historically, companies have asked candidates to use only vanilla JS, HTML and CSS to implement these components but nowadays, most companies will let you use whatever JS framework you'd like. This portion is usually the closest thing to what an FEE does on their day job so I don't typically spend much time preparing for this, but if you're feeling rusty than the best way to prepare for this is to create a series of diverse micro-projects.

- **System design:** Architecting complex, performant web applications; usually these questions are only asked for more senior positions. Unlike traditionally SDE system design interviews, these interviews typically focus on designing an application from the client side perspective. For example, breaking down the process of building a complex UI like the Facebook news feed or a Pinterest board. Again, we will take a deeper dive on this topic but as a sneak preview, the [YouTube channel "Front End Engineer"](https://www.youtube.com/@FrontEndEngineer) has a great series of examples and is criminally under-viewed.

- **Data structures & algorithms:** The bread and butter of the quintessential coding interview. These questions are what people typically think of when they think of coding interviews (inverting binary trees, finding the shortest paths, locating the total number of single moms in your area, etc.). Essentially, applying specific data structures & algorithms to the type of questions you'd find on [leetcode.com](https://leetcode.com/). Like I mentioned earlier, this is typically a small portion of the interview compared to SDE interviews (e.g. only 1-2 rounds of 6 as opposed to 4-5), but it is still present. Practice makes perfect here, but there is a tried and true method here to make sure that practice is efficient.

And that's really it. Front end interviews can feel like the wild west due to the breadth of topics which are up for grabs, but they are relatively applied and accessible. Stay tuned, in next week's article we will break down front end system design, with DSA, web dev fundamentals, and even component building shortly thereafter.
