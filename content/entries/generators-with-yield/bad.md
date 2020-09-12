---
title: "DON'T forget the prefixing"
---

```dart
Stream<State> mapEventToState(Event event) async* {
    _requestData(event.id); // Bad, as this won't work and no error is thrown
}

Stream<State> _requestData(int id) async* {
    final data = await dataRepository.load(chatId);
    yield DataLoaded(data: data);
}
```