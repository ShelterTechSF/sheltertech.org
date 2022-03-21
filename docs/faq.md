# Frequently Asked Questions

## Previewing unpublished Prismic content shows a 404 page in development

If you see the "Gatbsy.js development 404 page," then click "Preview custom 404
page" to preview the unpublished content.

The Gatsby-Prismic plugin does indeed support previewing unpublished content,
but it relies on hooking into the 404 page to display that content. In
development mode, however, Gatsby injects its own 404 page, so you need to click
"Preview custom 404 page" in order to go to our normal 404 page.

In production, this should function normally without any required extra steps.
