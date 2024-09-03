# Zod-env

## Library for type-safe and convenient use of environments variables.

## Example:

### Create schema of environment variables in your project:

```typescript
import { z } from "zod";
import { createEnv } from "../src";

export const env = createEnv({
  shape: {
    STRING: z.string(),
    NUM: z.number(),
    OBJ: z.object({
      name: z.string(),
    }),
  },
  env: import.meta.env,
  keyFormat: (key) => `VITE_${key}`,
});
```

## Add necessary environment variables to your .env file:

```bash
VITE_STRING=Title
VITE_NUM=1
VITE_OBJ="{"name":"name"}"
```

### Use object with your environment variables:

```typescript
import { env } from "./env";

env.STRING; // "Title"
env.NUM; // 1
env.OBJ; // { name: 'name' }
```
