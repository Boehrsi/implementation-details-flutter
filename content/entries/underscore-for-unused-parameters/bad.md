---
title: "DON'T name unused paramters"
---

```dart
return MaterialApp(
    ...
    localeResolutionCallback: (locale, supportedLocales) { // Bad, as supportedLocales is never used
        Intl.defaultLocale = locale.toString();
        return locale;
    },
    ...
);

return MaterialApp(
    ...
    localeResolutionCallback: (locale, supportedLocales) { // Bad, as locale and supportedLocales are never used
        return Locale('en', '');
    },
    ...
);
```