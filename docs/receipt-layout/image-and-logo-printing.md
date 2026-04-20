# Images and logos — `<IMG>`

Give your receipts a professional look by adding a company logo, a product image, or any custom visual. The image is fetched from the URL you provide.

```text
<IMG>https://your-domain.com/logo.png</IMG>
```

> ⚠️ **HTTP URLs are not accepted.** The image must be served over SSL (`https://`).

## Image requirements

| Property | Accepted values |
| --- | --- |
| **Format** | `.JPG`, `.GIF`, `.PNG` |
| **Resolution** | 72 dpi |
| **Color mode** | RGB |
| **Colors** | Flat black on white background |
| **Transparency (alpha)** | ❌ Not supported |
| **Recommended file size** | 5 KB – 15 KB |

## Dimensions by paper width

| Paper width | Image width |
| --- | --- |
| 58 mm | 398 px |
| 80 mm | 602 px |
| 104 mm | 1002 px |

> ⚠️ Some image types are not supported by all ESC/POS printer models and **may block the entire print request.** Always test with and without images before deploying to production.

## Graphic mode (58 / 80 mm thermal printers)

When using the [Cloud Print Box](https://www.expedy.io/fr/produit/adaptateur-usb-cloud-print-server/), the image printing mode is set in the Expedy console under **Printers → Select printer**.

| Mode | Notes |
| --- | --- |
| `Graphics` | ✅ Default — works for most printers |
| `BitImageRaster` | Use if `Graphics` produces incorrect output |
| `BitImageColumn` | Alternative fallback for older models |

## Centering an image

The `<IMG>` tag does not apply text alignment — **centering must be built into the image file itself**. Leave equal white margins on both sides of your logo, sized to match the target paper width.

## Multiple images and rotation

You can print several images on the same receipt, swap your logo dynamically, or display a promotional banner that changes with every order:

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: [
    "<IMG>https://cdn.example.com/logo-602px.png</IMG>",
    "<BR>",
    "<C>Thank you for your visit</C>",
    "<BR>",
    "<IMG>https://cdn.example.com/coupon-602px.png</IMG>",
    "<BR>",
    "<CUT/>",
  ].join(""),
});
```

## Checklist before printing

- [ ] Image is served over **HTTPS**
- [ ] Format is `.JPG`, `.GIF` or `.PNG`
- [ ] Width matches the target paper size (398 / 602 / 1002 px)
- [ ] Colors are flat black on white — no transparency
- [ ] File size is between **5 KB and 15 KB**
- [ ] Graphic mode is correctly set in the console (Cloud Print Box only)
- [ ] Tested on target printer model before production use
