---
title: "DO replace unused parameters with underscores"
---

```dart
return MaterialApp(
    ...
    localeResolutionCallback: (locale, _) { // Good
        Intl.defaultLocale = locale.toString();
        return locale;
    },
    ...
);

return MaterialApp(
    ...
    localeResolutionCallback: (_, __) { // Good
        return Locale('en', '');
    },
    ...
);
```