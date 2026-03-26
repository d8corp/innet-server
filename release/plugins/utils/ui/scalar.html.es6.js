var scalar = "<!doctype html>\n<html>\n<head>\n    <title>API Reference</title>\n    <meta charset=\"utf-8\" />\n    <meta\n            name=\"viewport\"\n            content=\"width=device-width, initial-scale=1\" />\n</head>\n<body>\n<div id=\"app\"></div>\n<script src=\"https://cdn.jsdelivr.net/npm/@scalar/api-reference\"></script>\n<script>\n  Scalar.createApiReference('#app', {\n    url: '{apiUrl}',\n    ...{params}\n  })\n</script>\n</body>\n</html>\n";

export { scalar as default };
