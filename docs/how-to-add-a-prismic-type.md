# How To Add A Prismic Type

This project uses the [Prismic][] content management system (CMS), which is a
headless CMS service that provides an API for querying content written by
content authors. Prismic allows you to define [custom types][], which are named
collections of fields describing some piece of content.

We also use the [gatsby-source-prismic][] plugin for integrating Gatsby with
Prismic. Because gatsby-source-prismic needs to understand the fields available
on each custom type, there are a few extra steps we must take when adding a
custom type in Prismic.

This guide assumes that you have already created the custom type in the Prismic
user interface.


## Copying the Prismic JSON schema to this Git repository

When adding or modifying a Prismic custom type, there is a JSON representation
of the schema of that type. In the Prismic custom type editor interface, you can
access the JSON schema by clicking on the [JSON editor][] tab on the far right
side of the page.

Copy and paste the JSON data into `src/schemas`, using a file name that matches
the custom type's [API ID][] (generally the name of the type in snake_case). For
example, if the API ID is `blog_post`, copy the JSON schema to
`src/schemas/blog_post.json`.

Then update [gatsby-config.js](../gatsby-config.js) to point to this new file.
This will go under the gatsby-source-prismic plugin options, under `schemas`.


## Updating the link resolver function

Next, you may need to update the link resolver function. The [link resolver][]
is a JavaScript function that is accepts a Prismic document as an argument and
returns the URL on this website corresponding to that document. For example, if
the link resolver is provided a document corresponding to a blog post with an ID
of `hello-world`, we may want to resolve that to `/blog/hello-world`.

When adding a custom type that corresponds to a new page, you must update the
`linkResolver()` function in
[src/utils/linkResolver.js](../src/utils/linkResolver.js). Note that you may not
need to do this for custom types that do not correspond to new pages but that
are present across many pages, such as the site footer.


[Prismic]: https://prismic.io/
[custom types]: https://prismic.io/docs/core-concepts/custom-types
[gatsby-source-prismic]: https://github.com/prismicio/prismic-gatsby
[JSON editor]: https://prismic.io/docs/core-concepts/content-modeling-with-json
[API ID]: https://prismic.io/docs/core-concepts/content-modeling-with-json#what-is-an-api-id
[link resolver]: https://prismic.io/docs/core-concepts/link-resolver-route-resolver
