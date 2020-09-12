---
title: "Generators with yield*"
date: 2020-09-12T16:00:00+02:00
authors: ["Boehrsi"]
categories: ["Bloc", "Async"]
links: ["https://dart.dev/guides/language/language-tour#generators"]
---

Generator functions in Dart are pretty useful, but it's important to use them the right way. It's required to use the `yield*` prefix for related method calls, as without the function won't be called at all.  
This leads to malfunctions and is also quite hard to debug, as it's not obvious (no errors are thrown).