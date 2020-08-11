---
title: 'Touchless UI'
date: October 2019
date_display: "October 2019"
featured_image: '/images/touchless-ui-2.gif'
excerpt: Hand gesture-based user interaction program.
---

![](/images/touchless-ui.gif)

## Purpose

I always aspire to explore interaction beyond keyboards and touch. The advances in Computer Vision allow the interaction system to be reorganization based. This is a side project to make use of hand gestures as an input modality.


Touchless UI is a hand gesture-based user interaction program. It allows the user to interact with youtube videos by using intuitive hand gestures. At the proof of concept stage, this program currently supports interactions to play and stop a video.


![](/images/touchless-ui-2.gif)

## Architecture

Touchless UI is built on a customized version of mediapipe, and the interaction is running on a headless browser. Mediapipe is a multimodal applied ML pipeline that supports us with hand landmarks. I classify different gestures by using an SVM model and then connect it to specific experiences within the browser. The headless browser allows me to make use of existing user experience on webspace and add a new layer of interaction on it.


## Learnings
One important learning I gained in this project was that, hand gesture, like any other modality, has its own limitation and is not universally appropriate. While I was developing and testing the program in a Starbucks, it was an awkward experience sitting in front of a stranger and puting hand up and down to control a computer.  

While gesture-based interaction is intuitive and native to human behavior, it is more suitable for private or semi-private settings. Future interaction systems need to be multi-modal and dynamic based on context environments. 

[Github Repo](https://github.com/yujie-tao/touchless-ui)
