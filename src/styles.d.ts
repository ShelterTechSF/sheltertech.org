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

// This prevents typescript from complaining when importing .svg files
declare module "*.svg";
