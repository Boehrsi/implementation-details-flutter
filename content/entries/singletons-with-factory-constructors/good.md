---
title: "DO use factory constructors to provide singeltons"
---

```dart
class DatabaseProvider {
  static DatabaseProvider _instance;

  factory DatabaseProvider() {
    _instance ??= DatabaseProvider._internal();
    return _instance;
  }

  DatabaseProvider._internal();
}
```