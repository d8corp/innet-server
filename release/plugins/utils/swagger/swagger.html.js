'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var html = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <meta\n    name=\"description\"\n    content=\"SwaggerUI\"\n  />\n  <title>SwaggerUI</title>\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/swagger-ui-dist@5.1.0/swagger-ui.css\" />\n</head>\n<body>\n<div id=\"swagger-ui\"></div>\n<script src=\"https://unpkg.com/swagger-ui-dist@5.1.0/swagger-ui-bundle.js\" crossorigin></script>\n<script>\n  window.onload = () => {\n    window.ui = SwaggerUIBundle({\n      spec: {},\n      dom_id: '#swagger-ui',\n    });\n  };\n</script>\n</body>\n</html>\n";

exports["default"] = html;
