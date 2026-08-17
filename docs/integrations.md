# Integrations

Already using an e-commerce platform, a delivery aggregator, or a no-code automation tool?
There is a good chance you don't need to write any code at all — Expedy PRINT ships
first-party or Zapier/Make-based integrations for the platforms below.

**Use this index instead of the SDK when** your order source is one of these platforms and
you just need "print the order automatically" — no custom logic, no non-standard ticket
layout. **Use the SDK (this repository) instead when** you're building your own backend,
need custom ticket formatting (the [tag language](./receipt-layout/text-layout-tags.md)),
need Chinese/Japanese/Korean support (`printer_han`), or need the [`devices`](./concepts/printers-vs-devices.md)
resource to drive a non-thermal printer over a Raspberry Pi gateway.

> These pages live on the canonical docs site, not in this repository — `displays` and
> `medias` integrations included. Links point to `docs.expedy.io`; if a platform has since
> renamed or moved, search [docs.expedy.io](https://docs.expedy.io/) directly.

### E-commerce & storefronts

- [AquilaCMS](https://docs.expedy.io/integrations/aquilacms/connect-a-receipt-printer-to-aquilacms) — Print AquilaCMS orders on a receipt printer
- [BaseLinker](https://docs.expedy.io/integrations/baselinker/connect-a-receipt-printer-to-baselinker) — Print from BaseLinker with Expedy PRINT
- [Big Cartel](https://docs.expedy.io/integrations/big-cartel/connect-a-receipt-printer-to-big-cartel) — Print from Big Cartel with Expedy PRINT
- [BigCommerce](https://docs.expedy.io/integrations/bigcommerce/connect-a-receipt-printer-to-bigcommerce) — Print from BigCommerce with Expedy PRINT
- [CS-Cart](https://docs.expedy.io/integrations/cs-cart/connect-a-receipt-printer-to-cs-cart) — Print from CS-Cart with Expedy PRINT
- [Ecwid by Lightspeed](https://docs.expedy.io/integrations/ecwid/connect-a-receipt-printer-to-ecwid) — Print from Ecwid by Lightspeed with Expedy PRINT
- [GrazeCart](https://docs.expedy.io/integrations/grazecart/connect-a-receipt-printer-to-grazecart) — Print from GrazeCart with Expedy PRINT
- [Gumroad](https://docs.expedy.io/integrations/gumroad/connect-a-receipt-printer-to-gumroad) — Print from Gumroad with Expedy PRINT
- [HoneyCart](https://docs.expedy.io/integrations/honeycart/connect-a-receipt-printer-to-honeycart) — Print from HoneyCart with Expedy PRINT
- [Jumpseller](https://docs.expedy.io/integrations/jumpseller/connect-a-receipt-printer-to-jumpseller) — Print from Jumpseller with Expedy PRINT
- [Katana](https://docs.expedy.io/integrations/katana/connect-a-receipt-printer-to-katana) — Print from Katana with Expedy PRINT
- [Lemon Squeezy](https://docs.expedy.io/integrations/lemon-squeezy/connect-a-receipt-printer-to-lemon-squeezy) — Print from Lemon Squeezy with Expedy PRINT
- [Magento](https://docs.expedy.io/integrations/magento/connect-a-receipt-printer-to-magento) — Print from Magento with Expedy PRINT
- [Prestashop](https://docs.expedy.io/integrations/prestashop/prestashop-module-cloud-print-orders-automatically) — PrestaShop Module: Automatic Order Printing
- [Salla](https://docs.expedy.io/integrations/salla/connect-a-receipt-printer-to-salla) — Print from Salla with Expedy PRINT
- [SamCart](https://docs.expedy.io/integrations/samcart/connect-a-receipt-printer-to-samcart) — Print from SamCart with Expedy PRINT
- [Shift4Shop](https://docs.expedy.io/integrations/shift4shop/connect-a-receipt-printer-to-shift4shop) — Print from Shift4Shop with Expedy PRINT
- **Shopify**
  - [Shopify plugins : Cloud Print orders automatically](https://docs.expedy.io/integrations/shopify/shopify-plugins-cloud-print-orders-automatically)
  - [Order Print Settings : Receipt customisation](https://docs.expedy.io/integrations/shopify/order-print-settings-receipt-customisation)
  - [Print a copy of the order](https://docs.expedy.io/integrations/shopify/print-a-copy-of-the-order)
  - [Add a logo to the Shopify order form](https://docs.expedy.io/integrations/shopify/add-a-logo-to-the-shopify-order-form)
  - [Shopify and Zapier, print only the orders you choose](https://docs.expedy.io/integrations/shopify/connect-shopify-to-expedy-print-with-zapier)
- [SHOPLINE](https://docs.expedy.io/integrations/shopline/connect-a-receipt-printer-to-shopline) — Print from SHOPLINE with Expedy PRINT
- [Squarespace Commerce](https://docs.expedy.io/integrations/squarespace-commerce/connect-a-receipt-printer-to-squarespace-commerce) — Print from Squarespace Commerce with Expedy PRINT
- [Store Factory](https://docs.expedy.io/integrations/store-factory/connect-a-receipt-printer-to-store-factory) — Print Store Factory orders on a receipt printer
- [Stripe](https://docs.expedy.io/integrations/stripe/connect-a-receipt-printer-to-stripe) — Print from Stripe with Expedy PRINT
- [ThriveCart](https://docs.expedy.io/integrations/thrivecart/connect-a-receipt-printer-to-thrivecart) — Print from ThriveCart with Expedy PRINT
- [Webflow](https://docs.expedy.io/integrations/webflow/connect-a-receipt-printer-to-webflow) — Print from Webflow with Expedy PRINT
- [Wix](https://docs.expedy.io/integrations/wix/connect-a-receipt-printer-to-wix) — Print from Wix with Expedy PRINT
- [WiziShop](https://docs.expedy.io/integrations/wizishop/connect-a-receipt-printer-to-wizishop) — Print from WiziShop with Expedy PRINT
- **Wordpress | Woocommerce**
  - [WordPress/WooCommerce Extension Plugin : Print orders automatically](https://docs.expedy.io/integrations/wordpress-woocommerce/wordpress-woocommerce-extension-plugin-print-orders-automatically)
  - [WCFM Plugin : Print orders to each vendor printer](https://docs.expedy.io/integrations/wordpress-woocommerce/wcfm-woocommerce-plugin-print-orders-to-each-vendor-printer)
  - [WooCommerce and Zapier, print only the orders you choose](https://docs.expedy.io/integrations/wordpress-woocommerce/connect-woocommerce-to-expedy-print-with-zapier)
- [Zoho Inventory](https://docs.expedy.io/integrations/zoho-inventory/connect-a-receipt-printer-to-zoho-inventory) — Print from Zoho Inventory with Expedy PRINT

### Food delivery & restaurant POS

- [App4](https://docs.expedy.io/integrations/app4/connect-a-receipt-printer-to-app4) — Print App4 orders on a receipt printer
- [Barmade](https://docs.expedy.io/integrations/barmade/connect-a-receipt-printer-to-barmade) — Receipt printing with Barmade
- [Bowo](https://docs.expedy.io/integrations/bowo/connect-a-receipt-printer-to-bowo) — Receipt printing with Bowo
- [BWares](https://docs.expedy.io/integrations/bwares/connect-a-receipt-printer-to-bwares) — Print BWares orders on a receipt printer
- [Châtaigne](https://docs.expedy.io/integrations/chataigne/connect-a-receipt-printer-to-chataigne) — Receipt printing with Châtaigne
- [Delicity](https://docs.expedy.io/integrations/delicity/connect-a-receipt-printer-to-delicity) — Print Delicity orders on a receipt printer
- [Deliveroo](https://docs.expedy.io/integrations/deliveroo/connect-a-receipt-printer-to-deliveroo) — Print Deliveroo orders on a receipt printer
- [Delivery Hero](https://docs.expedy.io/integrations/delivery-hero/connect-a-receipt-printer-to-delivery-hero) — Print Delivery Hero orders on a receipt printer
- [Dishop](https://docs.expedy.io/integrations/dishop/connect-a-receipt-printer-to-dishop) — Print Dishop orders on a receipt printer
- [DOOD](https://docs.expedy.io/integrations/dood/connect-a-receipt-printer-to-dood) — Print DOOD orders on a receipt printer
- [DoorDash](https://docs.expedy.io/integrations/doordash/connect-a-receipt-printer-to-doordash) — Print DoorDash orders on a receipt printer
- [eddress](https://docs.expedy.io/integrations/eddress/connect-a-receipt-printer-to-eddress) — Print eddress orders on a receipt printer
- [eEatself](https://docs.expedy.io/integrations/eeatself/connect-a-receipt-printer-to-eeatself) — Print eEatself orders on a receipt printer
- [Flex Catering](https://docs.expedy.io/integrations/flex-catering/connect-a-receipt-printer-to-flex-catering) — Print from Flex Catering with Expedy PRINT
- [Flipdish](https://docs.expedy.io/integrations/flipdish/connect-a-receipt-printer-to-flipdish) — Print from Flipdish with Expedy PRINT
- [Foodpanda](https://docs.expedy.io/integrations/foodpanda/connect-a-receipt-printer-to-foodpanda) — Print Foodpanda orders on a receipt printer
- [Formitable](https://docs.expedy.io/integrations/formitable/connect-a-receipt-printer-to-formitable) — Print from Formitable with Expedy PRINT
- [Fresh KDS](https://docs.expedy.io/integrations/fresh-kds/connect-a-receipt-printer-to-fresh-kds) — Print from Fresh KDS with Expedy PRINT
- [Glovo](https://docs.expedy.io/integrations/glovo/connect-a-receipt-printer-to-glovo) — Print Glovo orders on a receipt printer
- [GonnaOrder](https://docs.expedy.io/integrations/gonnaorder/connect-a-receipt-printer-to-gonnaorder) — Print GonnaOrder orders on a receipt printer
- [GoodBarber](https://docs.expedy.io/integrations/goodbarber/print-goodbarber-orders-on-a-receipt-printer) — Print GoodBarber eCommerce orders via Zapier
- [Hop Delivery](https://docs.expedy.io/integrations/hop-delivery/connect-a-receipt-printer-to-hop-delivery) — Print Hop Delivery orders on a receipt printer
- [HubRise](https://docs.expedy.io/integrations/hubrise/connecting-a-receipt-printer-to-hubrise) — Connect a receipt printer to HubRise
- [Just Eat](https://docs.expedy.io/integrations/just-eat/connect-a-receipt-printer-to-just-eat) — Print Just Eat orders on a receipt printer
- [Just Eat Takeaway](https://docs.expedy.io/integrations/just-eat-takeaway/connect-a-receipt-printer-to-just-eat-takeaway) — Print Just Eat Takeaway orders on a receipt printer
- [Kurve Kiosks](https://docs.expedy.io/integrations/kurve-kiosks/connect-a-receipt-printer-to-kurve-kiosks) — Print Kurve Kiosks orders on a receipt printer
- [La Toque Magique](https://docs.expedy.io/integrations/la-toque-magique/connect-a-receipt-printer-to-la-toque-magique) — Receipt printing with La Toque Magique
- [Lieferando](https://docs.expedy.io/integrations/lieferando/connect-a-receipt-printer-to-lieferando) — Print Lieferando orders on a receipt printer
- [LightKitch](https://docs.expedy.io/integrations/lightkitch/connect-a-receipt-printer-to-lightkitch) — Receipt printing with LightKitch
- [LivePepper](https://docs.expedy.io/integrations/livepepper/connect-a-receipt-printer-to-livepepper) — Print LivePepper orders on a receipt printer
- [Loca'Touch](https://docs.expedy.io/integrations/locatouch/connect-a-receipt-printer-to-locatouch) — Print Loca'Touch orders on a receipt printer
- [Love2Food](https://docs.expedy.io/integrations/love2food/connect-a-receipt-printer-to-love2food) — Receipt printing with Love2Food
- [Menulog](https://docs.expedy.io/integrations/menulog/connect-a-receipt-printer-to-menulog) — Print Menulog orders on a receipt printer
- [MynOber](https://docs.expedy.io/integrations/mynober/connect-a-receipt-printer-to-mynober) — Print MynOber orders on a receipt printer
- [Obypay](https://docs.expedy.io/integrations/obypay/connect-a-receipt-printer-to-obypay) — Print Obypay orders on a receipt printer
- [OrderLemon](https://docs.expedy.io/integrations/orderlemon/connect-a-receipt-printer-to-orderlemon) — Receipt printing with OrderLemon
- [Ordermate](https://docs.expedy.io/integrations/ordermate/connect-a-receipt-printer-to-ordermate) — Print from Ordermate with Expedy PRINT
- [OrderOut](https://docs.expedy.io/integrations/orderout/connect-a-receipt-printer-to-orderout) — Print from OrderOut with Expedy PRINT
- [Pyszne](https://docs.expedy.io/integrations/pyszne/connect-a-receipt-printer-to-pyszne) — Print Pyszne orders on a receipt printer
- [RestaJet](https://docs.expedy.io/integrations/restajet/connect-a-receipt-printer-to-restajet) — Print RestaJet orders on a receipt printer
- [Restaur'App](https://docs.expedy.io/integrations/restaur-app/connect-a-receipt-printer-to-restaur-app) — Print Restaur'App orders on a receipt printer
- [Restaurant-internet](https://docs.expedy.io/integrations/restaurant-internet/connect-a-receipt-printer-to-restaurant-internet) — Print Restaurant-internet orders on a receipt printer
- [Servier.bar](https://docs.expedy.io/integrations/servier-bar/connect-a-receipt-printer-to-servier-bar) — Print Servier.bar orders on a receipt printer
- [Skip The Dishes](https://docs.expedy.io/integrations/skip-the-dishes/connect-a-receipt-printer-to-skip-the-dishes) — Print Skip The Dishes orders on a receipt printer
- [SmartResto.Net](https://docs.expedy.io/integrations/smartresto/connect-a-receipt-printer-to-smartresto) — Print SmartResto.Net orders on a receipt printer
- [smilein](https://docs.expedy.io/integrations/smilein/connect-a-receipt-printer-to-smilein) — Print smilein orders on a receipt printer
- [Smood](https://docs.expedy.io/integrations/smood/connect-a-receipt-printer-to-smood) — Print Smood orders on a receipt printer
- [Tablati](https://docs.expedy.io/integrations/tablati/connect-a-receipt-printer-to-tablati) — Print Tablati orders on a receipt printer
- [Talabat](https://docs.expedy.io/integrations/talabat/connect-a-receipt-printer-to-talabat) — Print Talabat orders on a receipt printer
- [TastyCloud](https://docs.expedy.io/integrations/tastycloud/connect-a-receipt-printer-to-tastycloud) — Print TastyCloud orders on a receipt printer
- [Thuisbezorgd](https://docs.expedy.io/integrations/thuisbezorgd/connect-a-receipt-printer-to-thuisbezorgd) — Print Thuisbezorgd orders on a receipt printer
- [Uber Eats](https://docs.expedy.io/integrations/uber-eats/connect-a-receipt-printer-to-uber-eats) — Print Uber Eats orders on a receipt printer
- [WeDely](https://docs.expedy.io/integrations/wedely/connect-a-receipt-printer-to-wedely) — Print WeDely orders on a receipt printer
- [Wolt](https://docs.expedy.io/integrations/wolt/connect-a-receipt-printer-to-wolt) — Print Wolt orders on a receipt printer
- [Zenorder](https://docs.expedy.io/integrations/zenorder/connect-a-receipt-printer-to-zenorder) — Receipt printing with Zenorder
- [Zuplyit](https://docs.expedy.io/integrations/zuplyit/connect-a-receipt-printer-to-zuplyit) — Print Zuplyit orders on a receipt printer

### No-code / iPaaS automation

- [Activepieces](https://docs.expedy.io/integrations/activepieces/connect-a-receipt-printer-to-activepieces) — Print from Activepieces with Expedy PRINT
- [Airtable](https://docs.expedy.io/integrations/airtable/connect-a-receipt-printer-to-airtable) — Print from Airtable with Expedy PRINT
- [Albato](https://docs.expedy.io/integrations/albato/connect-a-receipt-printer-to-albato) — Print from Albato with Expedy PRINT
- [Bubble](https://docs.expedy.io/integrations/bubble/connect-a-receipt-printer-to-bubble) — Print from Bubble with Expedy PRINT
- [Google Sheets](https://docs.expedy.io/integrations/google-sheets/connect-a-receipt-printer-to-google-sheets) — Print from Google Sheets with Expedy PRINT
- [HubSpot](https://docs.expedy.io/integrations/hubspot/connect-a-receipt-printer-to-hubspot) — Print from HubSpot with Expedy PRINT
- [IFTTT](https://docs.expedy.io/integrations/ifttt/connect-a-receipt-printer-to-ifttt) — Print from IFTTT with Expedy PRINT
- [Integrately](https://docs.expedy.io/integrations/integrately/connect-a-receipt-printer-to-integrately) — Print from Integrately with Expedy PRINT
- [Jotform](https://docs.expedy.io/integrations/jotform/connect-a-receipt-printer-to-jotform) — Print from Jotform with Expedy PRINT
- [Latenode](https://docs.expedy.io/integrations/latenode/connect-a-receipt-printer-to-latenode) — Print from Latenode with Expedy PRINT
- [Make](https://docs.expedy.io/integrations/make/connect-a-receipt-printer-to-make) — Print from Make with Expedy PRINT
- [Microsoft Power Automate](https://docs.expedy.io/integrations/power-automate/connect-a-receipt-printer-to-power-automate) — Print from Microsoft Power Automate with Expedy PRINT
- [n8n](https://docs.expedy.io/integrations/n8n/connect-a-receipt-printer-to-n8n) — Print from n8n with Expedy PRINT
- [Pabbly Connect](https://docs.expedy.io/integrations/pabbly-connect/connect-a-receipt-printer-to-pabbly-connect) — Print from Pabbly Connect with Expedy PRINT
- [Pipedream](https://docs.expedy.io/integrations/pipedream/connect-a-receipt-printer-to-pipedream) — Print from Pipedream with Expedy PRINT
- [Pipedrive](https://docs.expedy.io/integrations/pipedrive/connect-a-receipt-printer-to-pipedrive) — Print from Pipedrive with Expedy PRINT
- [Relay.app](https://docs.expedy.io/integrations/relay-app/connect-a-receipt-printer-to-relay-app) — Print from Relay.app with Expedy PRINT
- [Retool](https://docs.expedy.io/integrations/retool/connect-a-receipt-printer-to-retool) — Print from Retool with Expedy PRINT
- [Softr](https://docs.expedy.io/integrations/softr/connect-a-receipt-printer-to-softr) — Print from Softr with Expedy PRINT
- [Tally](https://docs.expedy.io/integrations/tally/connect-a-receipt-printer-to-tally) — Print from Tally with Expedy PRINT
- [Typeform](https://docs.expedy.io/integrations/typeform/connect-a-receipt-printer-to-typeform) — Print from Typeform with Expedy PRINT
- [WeWeb](https://docs.expedy.io/integrations/weweb/connect-a-receipt-printer-to-weweb) — Print from WeWeb with Expedy PRINT
- [Xano](https://docs.expedy.io/integrations/xano/connect-a-receipt-printer-to-xano) — Print from Xano with Expedy PRINT
- [Zapier](https://docs.expedy.io/integrations/zapier/how-to-integrate-expedy-print-with-zapier) — How to integrate Expedy Print with Zapier

### Shipping, labels & fulfillment

- [Easyship](https://docs.expedy.io/integrations/easyship/connect-a-receipt-printer-to-easyship) — Print your Easyship shipping labels automatically
- [inFlow Inventory](https://docs.expedy.io/integrations/inflow-inventory/connect-a-receipt-printer-to-inflow-inventory) — Print from inFlow Inventory with Expedy PRINT
- [Order Desk](https://docs.expedy.io/integrations/order-desk/connect-a-receipt-printer-to-order-desk) — Print from Order Desk with Expedy PRINT
- [Packlink PRO](https://docs.expedy.io/integrations/packlink-pro/connect-a-receipt-printer-to-packlink-pro) — Print your Packlink PRO shipping labels automatically
- [shipcloud](https://docs.expedy.io/integrations/shipcloud/connect-a-receipt-printer-to-shipcloud) — Print your shipcloud shipping labels automatically
- [Shipmondo](https://docs.expedy.io/integrations/shipmondo/connect-a-receipt-printer-to-shipmondo) — Print your Shipmondo shipping labels automatically
- [Shippo](https://docs.expedy.io/integrations/shippo/connect-a-receipt-printer-to-shippo) — Print your Shippo shipping labels automatically
- [ShippyPro](https://docs.expedy.io/integrations/shippypro/connect-a-receipt-printer-to-shippypro) — Print your ShippyPro shipping labels automatically
- [ShipStation](https://docs.expedy.io/integrations/shipstation/connect-a-receipt-printer-to-shipstation) — Print your ShipStation shipping labels automatically
- [Starshipit](https://docs.expedy.io/integrations/starshipit/connect-a-receipt-printer-to-starshipit) — Print your Starshipit shipping labels automatically
- [Veeqo](https://docs.expedy.io/integrations/veeqo/connect-a-receipt-printer-to-veeqo) — Print from Veeqo with Expedy PRINT

### POS, retail & inventory

- [Amazon Seller Central](https://docs.expedy.io/integrations/amazon-seller-central/connect-a-receipt-printer-to-amazon-seller-central) — Print from Amazon Seller Central with Expedy PRINT
- [eBay](https://docs.expedy.io/integrations/ebay/connect-a-receipt-printer-to-ebay) — Print from eBay with Expedy PRINT
- [EKM](https://docs.expedy.io/integrations/ekm/connect-a-receipt-printer-to-ekm) — Print from EKM with Expedy PRINT
- [Lightspeed Retail POS](https://docs.expedy.io/integrations/lightspeed-retail/connect-a-receipt-printer-to-lightspeed-retail) — Print from Lightspeed Retail POS with Expedy PRINT
- [Square](https://docs.expedy.io/integrations/square/connect-a-receipt-printer-to-square) — Print from Square with Expedy PRINT

### Bookings, forms & CRM

- [Acuity Scheduling](https://docs.expedy.io/integrations/acuity-scheduling/connect-a-receipt-printer-to-acuity-scheduling) — Print from Acuity Scheduling with Expedy PRINT
- [Calendly](https://docs.expedy.io/integrations/calendly/connect-a-receipt-printer-to-calendly) — Print from Calendly with Expedy PRINT
- [Eventbrite](https://docs.expedy.io/integrations/eventbrite/connect-a-receipt-printer-to-eventbrite) — Print from Eventbrite with Expedy PRINT

### Photo & cloud storage

- [Dropbox](https://docs.expedy.io/integrations/dropbox/connect-a-receipt-printer-to-dropbox) — Print your Dropbox photos automatically
- [Flickr](https://docs.expedy.io/integrations/flickr/connect-a-receipt-printer-to-flickr) — Print your Flickr photos automatically
- [Google Drive](https://docs.expedy.io/integrations/google-drive/connect-a-receipt-printer-to-google-drive) — Print your Google Drive photos automatically
- [Instagram](https://docs.expedy.io/integrations/instagram/connect-a-receipt-printer-to-instagram) — Print your Instagram photos automatically
- [Pinterest](https://docs.expedy.io/integrations/pinterest/connect-a-receipt-printer-to-pinterest) — Print your Pinterest photos automatically
- [Tumblr](https://docs.expedy.io/integrations/tumblr/connect-a-receipt-printer-to-tumblr) — Print your Tumblr photos automatically

## See also

- [Printers vs. devices](./concepts/printers-vs-devices.md) — when a custom SDK
  integration beats a no-code one.
- [Quickstart](./getting-started/quickstart.md) — build your own integration in ~10 lines.
