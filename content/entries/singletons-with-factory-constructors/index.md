---
title: "Singletons with factory constructors"
date: 2020-09-14T22:49:00+02:00
authors: ["Boehrsi"]
categories: ["Quality"]
links: ["https://dart.dev/guides/language/language-tour#constructors"]
---

Singletons are used to provide a single instance of an object to the whole project. Even though there are multiple ways to achieve this, one of the cleanest is to use a factory constructor in conjunction with a private constructor.