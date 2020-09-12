---
title: "Async methods should return futures"
date: 2020-09-12T16:00:00+02:00
authors: ["Boehrsi"]
categories: ["Async"]
links: ["https://dart.dev/codelabs/async-await"]
---

Any `async` method should wrap the expected return type in a `Future`, this is also valid for `void` methods. This way you ensure your code is understandable and future proof.