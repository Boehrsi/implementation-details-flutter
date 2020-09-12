---
title: "DO return Future<void>"
---

```dart
Future<void> loadChat() async { // Good
    await dataRepository.load(chatId);
}
```