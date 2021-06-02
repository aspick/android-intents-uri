# android-intents-uri

https://developer.chrome.com/docs/multidevice/android/intents/


## Usage

```ts
import AndroidIntensUri from 'android-intents-uri'

const link = AndroidIntensUri(
  'com.foo.schema',
  'hostname',
  'path/to/link',
  'com.foo.package'
) // => 'intent://hostname/path/to/link#Intent;package=com.foo.package;scheme=com.foo.schema;end;'
```
