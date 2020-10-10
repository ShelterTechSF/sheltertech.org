# Component Design System

Note: This is a work-in-progress document. The details may change as we try
applying this system and revise the design over time.

This system is based on a three-layer hierarchy of components, where each layer
has a unique set of responsibilities. The division of responsibilities is
derived from the HTML layout algorithm, where the rules of positioning and the
cascade of styles from parent and child elements influences how we define the
boundaries between the layers.


## A short primer on the HTML layout algorithm

HTML has two broad categories of elements: block elements and inline
elements. Block elements roughly correspond to rectangular sections of a page,
while inline elements roughly correspond to elements that flow with text. A
`<div>` is a generic block element while a `<span>` is a generic inline element.

By default, without additional CSS styling, block elements have a width that
spans the entire width of its parent and a height that spans the height of its
internal content. A block element therefore takes up the entire width of a "row"
while it stretches vertically to fit all the content within it. Sibling block
elements are stacked vertically, with the later siblings place immediately after
the earlier ones.

Inline elements, by contrast, only take up as much space as its internal
content. They can even take non-contiguous rectangular sections of a page if it
wraps from one row of text to the next. Inline elements act as if they were
text, hence they are laid out _inline_ with text.

A parent element constrains the layout of its children, and some of the newer
CSS `display` property values can describe alternative ways of laying out
children compared to the default layout described above. In particular `flex`
and `grid` provide rich ways of precisely laying out children by dividing up the
space available in the parent in different ways.


See Mozilla Developer Network's article on
[Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
for figures and more information.


## Design System

All UI components in the sheltertech.org will fall into one of three categories:

1. Inline components
2. Space-filling block components
3. Grid-aware components

### Inline components

Inline components are the lowest level of components, and they should not be
concerned with positioning or layout. These will often be the smallest level of
component, some even containing only a single HTML element. For the most part,
their size should be determined by their inner content, and they should not fill
the space of their parent, but in certain cases, it may be useful to set a fixed
size.

Examples of inline components include buttons, input elements, title text, and
paragraph text.

### Space-filling block components

Block components are the middle layer of components, and they represent
compositions of inline components or other block components in order to form a
cohesive unit. While a block component may control the layout of its child
components, the block component itself should not control its own layout.
Instead, it should expect that its parent sets properties such as sizing and
margins and that it itself should expand to fill the available space.

For example, block components generally should not be setting `height`, `width`,
`margin` or `position` properties. Block components also should not be aligning
themselves to any global grid layout.

Example of block components include cards, carousels, and other recurring
compositions of text and inline components.

### Grid-aware components

Grid-aware components are at the highest layer of the application, and in
general are direct descendants of the top-level page. Grid-aware components
should set up the grid tracks and place block-level components along the grid.
These are the only components that should be aware of the global grid, and these
components should mostly be concerned with positioning and not any other other
styling information such as color or fonts.

Examples of grid-aware components are the header and footer, hero banners, and
any rectangular section of a page that spans the whole width of the page.
