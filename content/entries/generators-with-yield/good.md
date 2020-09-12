---
title: "DO prefix async generator functions with yield*"
---

```dart
Stream<State> mapEventToState(Event event) async* {
    yield* _requestData(event.id); // Good
}

Stream<State> _requestData(int id) async* {
    final data = await dataRepository.load(chatId);
    yield DataLoaded(data: data);
}
```