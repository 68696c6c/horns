# Theme
The Theme package provides an API for configuring design tokens and themes.

## Tokens
Horns uses four levels of design tokens: foundation, semantic, trait, and element.  Tokens are ultimately consumed by components and define which props and which values a component can make use of.

Foundation tokens are broad collections of possible values.  For example, a color pallet with several shades of each color.  Because foundations are broad and non-specific, they are typically only useful in the first steps of theme development and are not intended to be used directly by an application.

Semantic tokens are a specific foundation values assigned to a semantic usage.  For example, a specific color shade assigned as the "primary" color.

Trait tokens are sets of semantic tokens assigned to related CSS properties.  Trait tokens typically come in several variants.  Traits are typically the lowest-level design token used directly by components, but should be avoided in favor of Element tokens whenever possible.  For example, a chromatic trait would set all color-related CSS properties to specific semantic tokens; a Typographic trait would set all font-related CSS properties, etc.

Element tokens are sets of trait tokens assigned to a specific UI element.  Like Trait tokens, Element tokens typically have variants.  Most low-level UI components will be built mostly with Element tokens.  For example, specific color and typographic traits combined for use with buttons.

## Theme
Horns defines a Theme as branded set of Trait and Element tokens that defines the presentation of an application.  All Themes share the same structure but may have different values.  The properties of the Theme largely define the API of the UI kit.  An application may have multiple themes, for example, a light and dark theme.

## Example
```css
/* primary button variant */
button.primary {
  /* chromatic properties */
  background-color: var(--theme--button--primary--background);
  color: var(--theme--button--primary--color);
  border-color: var(--theme--button--primary--border-color);

  /* bordered properties */
  border-style: var(--theme--button--primary--border-style);
  border-width: var(--theme--button--primary--border-width);

  /* typographic properties */
  font-size: var(--theme--button--primary--font-size);
  /* etc */
}
```
