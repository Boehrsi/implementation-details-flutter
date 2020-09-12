---
title: "DON'T return just void"
---

```dart
void loadChat() async { // Bad, as the caller doesn't know about the future
    await dataRepository.load(chatId);
}
```

```dart
loadChat() async { // Bad, as the caller doesn't know about the future
    await dataRepository.load(chatId);
}
```