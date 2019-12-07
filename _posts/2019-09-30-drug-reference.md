---
title: 'Drug Reference Mobile App'
date: May 2019
date_display: "May 2019"
featured_image: '/images/drug-reference.jpg'
excerpt: The goal of this project is to create a drug reference mobile app targeted at SICU physicians. It provides intuitive and simple navigation for physicians to look up drugs and make immediate life-saving decisions.
---

<!-- ![](/images/touchless-ui.gif) -->

## Purpose

The Surgical Intensive Care Unit (SICU) is where physicians are required to make immediate life-saving decisions. The goal of this project is to create a drug reference mobile app targeted at SICU physicians. It provides intuitive and simple navigation for physicians to look up drugs and make immediate life-saving decisions.
 

## Team
This project was a collaboration between four undergraduate students from UNC Computer Science with two medical professionals from UNC Bedside Pocket SICU Pharmacy. My collaborators include Kyle Feng, Yuxuan Liu, Therese Mendoza, Dr. John Yoon and Dr.Oyshik Banerjee. We are also mentored by Prof David Stotts and Jeff Terrell.



As a member of the engineering team, I led the UI/UX design and front-end development of this mobile app.

## Specification
This app needs three core functionalities:
* Navigation to specific drug/antibiotics.
* Search by class, subclass, drugs, and features.
* Comparison of multiple drugs with one or more metrics.

## Design
I designed the user interface in Adobe XD. With a focus was on "simple, quick, and intuitive navigation," I limited the use of sophisticated design elements and put emphasis on user flow. 

![](/images/drug-reference-2.jpg)

## Development

This app has end-users from both front-end and administrator side.

I developed in React Native and Typescript to handle mobile UI, Redux to handle state management, and a React router to handle switching from one screen to another. Mobile users for our application interacted with a front-end app available to both Android and iOS. 

Administrators of our application (those allowed to make changes to data being served) interacted with Google Sheets they used in the past to insert and update data. We used Google Apps Script to parse and validate data. Both the Google Apps Script and the front app communicated with our backend, which was based on Firebase. Our Firebase schema was organized the way medications were organized: by user information, drug classes, subclasses, and drug names (as well as miscellaneous drugs that aren’t within a subclass).

Code is located at: [https://github.com/kylefeng28/comp523-project](https://github.com/kylefeng28/comp523-project)

![](/images/drug-reference-3.jpg)