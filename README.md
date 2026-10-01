# FlashShop Bangladesh

Next.js storefront for FlashShop Bangladesh.

## Local development

Copy `.env.example` to `.env` and set the public configuration values, then run:

```bash
npm install
npm run dev
```

Product images can be delivered through ImageKit by setting
`NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` to the URL endpoint shown in the ImageKit
dashboard. The application retains local and legacy image fallbacks when that
variable is absent.
