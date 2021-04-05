// Treat all CSS modules as arbitrary mappings from strings to strings.
//
// Note that this will not check that any class names imported from a CSS module
// are actually valid. Most of the alternative solutions that actually generate
// type definitions from the CSS code are either outdated, unsupported, or have
// other flaws, so it may be best to punt on this until
// https://github.com/microsoft/TypeScript/issues/16607 is implemented within
// the TypeScript compiler itself.
//
// https://stackoverflow.com/a/59221178
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Define the type of imported SVG files, which Webpack's url-loader/file-loader
// will normally import as a string URL to the image or an embedded data: URL.
//
// https://webpack.js.org/guides/typescript/#importing-other-assets
declare module "*.svg" {
  const content: string;
  export default content;
}
