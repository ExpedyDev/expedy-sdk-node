# Authentication

Every Expedy API endpoint requires an `Authorization` header carrying two credentials joined by a colon, **without any prefix**:

```
Authorization: <API_SID>:<API_TOKEN>
```

Both credentials are issued in your Expedy account:

- `API_SID` identifies your account.
- `API_TOKEN` is the secret.

## curl

```bash
curl -X POST "https://www.expedy.fr/api/v2/printers/XG9DMFPKB2C/print" \
  -H "Authorization: xxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{"printer_msg":"<C>Hello</C><BR><CUT/>"}'
```

## Node.js (SDK)

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});
```

The SDK builds the `Authorization: <sid>:<token>` header internally on every request.

## Security

- Treat `API_TOKEN` like a password. Store it in a secrets manager or environment variable — never in a client bundle.
- Rotate the token from the Expedy console if it has ever been logged, committed or shared by accident.
