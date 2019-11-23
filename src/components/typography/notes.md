> designers think in terms of points and letting

kerning: the spacing between letters, always tweaked manually
letting: spacing between lines
spacing: spacing before and after the line, spacing between paragraphs; indenting: the spacing on left or right on a line
em: a unit of space
size: size of font; use points (preferred) or pica
weight: a specific form of the font-face, 'family' includes things like 'font light', 'font bold'
font: name of the family, e.g. Mont, Times New Roman, Arial
typeface: e.g. Arial bold
style: things like underline (referred to as rule or border) that aren't part of the font itself; headers, body, etc, a combination of size, weight, spacing, etc
  - paragraph styles: the default styles for headings and body
    - nested style: things like first character of a paragraph being fancy (called "drop caps"), or a specific word being different (that would be a nested style)
      - Nested Styles are Character Styles + rules of when to apply them
  - character styles: the exceptions to the rules, e.g. things like italic, color, changing a very specific attribute
-> probably want to support a Prominent style

lists: bullets and numbering also need to incorporate typographic concepts
- define list levels, e.g.  1, a, i

hyphenation: when to hyphenate (e.g. don't hyphenate across columns, lines etc) (see word-break, word-wrap)
justification: measured min and max and desired (ideal) percentages
  - word spacing: justify by spacing the words
  - letter spacing: justify by spacing the letters
  - glyph scaling: less common, scaling the characters themselves

*blocks and paragraphs ???
- block: is a block of text, non-technical term; perhaps small snippets of text that don't require as much thought
- paragraph: large sections of text that require consideration of more concepts like rythym etc.


# The Typographic Bible
The Elements of Typographic Style, 4th edition

## Rythym and Proportion
- average character count per line
- vertical motion
harmony and counterpoint: the relationship of sizing

## Choosing and Combining Type
- combining fonts tip: look at the 'o's to see how differnt fonts work together; compatible fonts will often have similar 'o'


## Properties
spacing:
- no space within strings of initials
- letterspace all strings of capitals and small caps, and all long strings lof digits
- for lowercase strings, only letterspace for a reason; italic roman serif faces with a lot of 'horizontal motion' or implied connection between the letters will not look good letterspaced; condensed sanserfi fonts like Helvetica can sometimes be letterspaced.
- sidebaring is the precise amount of breathing space a ltter carries with it on the left or right



---
# CSS Font properties
font-style:
- normal: The browser displays a normal font style. This is default.	
- italic: The browser displays an italic font style.
- oblique: The browser displays an oblique font style.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

font-variant:
- normal: The browser displays a normal font. This is default.	
- small-caps: The browser displays a small-caps font.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

font-weight:
- normal: Defines normal characters. This is default. (400)	
- bold: Defines thick characters. (700)
- bolder: Defines thicker characters. (?)
- lighter: Defines lighter characters. (?)
- 100 through 900 Defines from thin to thick characters. 400 is the same as normal, and 700 is the same as bold.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

font-size:
- xx-small: Sets the font-size to an xx-small size.
- x-small: Sets the font-size to an extra small size.
- small: Sets the font-size to a small size.
- medium: Sets the font-size to a medium size. This is default.
- large: Sets the font-size to a large size.
- x-large: Sets the font-size to an extra large size.
- xx-large: Sets the font-size to an xx-large size.
- smaller: Sets the font-size to a smaller size than the parent element.
- larger: Sets the font-size to a larger size than the parent element.
- length (cm, mm, in, px, pt, pc): Sets the font-size to a fixed size in px, cm, etc.
- %: Sets the font-size to a percent of  the parent element's font size.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

font-size-adjust:
  Gives you better control of the font size when the first selected font is not available.  When a font is not 
  available, the browser uses the second specified font. This could result in a big change for the font size. To prevent
  this, use the font-size-adjust property.  All fonts have an "aspect value" which is the size-difference between the 
  lowercase letter "x" and the uppercase letter "X".  When the browser knows the "aspect value" for the first selected 
  font, the browser can figure out what font-size to use when displaying text with the second choice font.
- number: Defines the aspect value to use
- none: Default value. No font size adjustment
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

font-family:
- family-name, generic-family: A prioritized list of font family names and/or generic family names.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

font-stretch: (unsupported) allows you to make text wider or narrower.  Will only work if the font family has width-variant faces.
- ultra-condensed: Makes the text as narrow as it gets.
- extra-condensed: Makes the text narrower than condensed, but not as narrow as ultra-condensed.
- condensed: Makes the text narrower than semi-condensed, but not as narrow as extra-condensed.
- semi-condensed: Makes the text narrower than normal, but not as narrow as condensed.
- normal: Default value. No font stretching.
- semi-expanded: Makes the text wider than normal, but not as wide as expanded.
- expanded: Makes the text wider than semi-expanded, but not as wide as extra-expanded.
- extra-expanded: Makes the text wider than expanded, but not as wide as ultra-expanded.
- ultra-expanded: Makes the text as wide as it gets.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.



## Values
These should be configurable typeface-styles
- caption: Uses the font that are used by captioned controls (like buttons, drop-downs, etc.)
- icon: Uses the font that are used by icon labels
- menu: Uses the fonts that are used by dropdown menus
- message-box: Uses the fonts that are used by dialog boxes
- small-caption: A smaller version of the caption font
- status-bar: Uses the fonts that are used by the status bar
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

# Related properties

## Kerning properties
letter-spacing: increases or decreases the space between characters in a text.
- normal: No extra space between characters. This is default.
- length: Defines an extra space between characters (negative values are allowed)
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

font-kerning: controls the usage of the kerning information stored in a font. (defines how letters are spaced) For fonts that do not include kerning data, this property will have no visible effect.
- auto: Default. The browser determines whether font kerning should be applied or not
- normal: Specifies that font kerning is applied
- none: Specifies that font kerning is not applied

## Hyphenation properties
word-break: specifies how words should break when reaching the end of a line.
- normal: Default value. Uses default line break rules
- break-all: To prevent overflow, word may be broken at any character
- keep-all: Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as value "normal"
- break-word: To prevent overflow, word may be broken at arbitrary points
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

word-wrap: allows long words to be able to be broken and wrap onto the next line.
- normal: Break words only at allowed break points.
- break-word: Allows unbreakable words to be broken.
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

## Justification properties
word-spacing: increases or decreases the white space between words.
- normal: Defines normal space between words (0.25em) . This is default.
- length: Defines an additional space between words (in px, pt, cm, em, etc). Negative values are allowed.
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

text-align: specifies the horizontal alignment of text in an element.
- left: Aligns the text to the left.
- right: Aligns the text to the right.
- center: Centers the text.
- justify: Stretches the lines so that each line has equal width (like in newspapers and magazines).
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

text-justify: specifies the justification method of text when text-align is set to "justify".
- auto: The browser determines the justification algorithm.
- inter-word: Increases/Decreases the space between words.
- inter-character: Increases/Decreases the space between characters.
- none: Disables justification methods.
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

## Spacing properties
margin: spacing before and after a paragraph

line-height: specifies the height of a line.
- normal: A normal line height. This is default.
- number: A number that will be multiplied with the current font-size to set the line height.
- length: A fixed line height in px, pt, cm, etc.
- %: A line height in percent of the current font size.
- initial: Sets this property to its default value.	
- inherit	Inherits this property from its parent element.

white-space: specifies how white-space inside an element is handled.
- normal: Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary. This is default.
- nowrap: Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. The text continues on the same line until a <br> tag is encountered.
- pre: Whitespace is preserved by the browser. Text will only wrap on line breaks. Acts like the <pre> tag in HTML.
- pre-line: Sequences of whitespace will collapse into a single whitespace. Text will wrap when necessary, and on line breaks.
- pre-wrap: Whitespace is preserved by the browser. Text will wrap when necessary, and on line breaks.
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

text-indent: specifies the indentation of the first line in a text-block.
- length: Defines a fixed indentation in px, pt, cm, em, etc. Default value is 0. Read about length units.
- %: Defines the indentation in % of the width of the parent element.
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.


## 
writing-mode: specifies whether lines of text are laid out horizontally or vertically.
- horizontal-tb: Let the content flow horizontally from left to right, vertically from top to bottom.
- vertical-rl: Let the content flow vertically from top to bottom, horizontally from right to left.
- vertical-lr: Let the content flow vertically from top to bottom, horizontally from left to right.

text-transform: controls the capitalization of text.
- none: No capitalization. The text renders as it is. This is default.
- capitalize: Transforms the first character of each word to uppercase.
- uppercase: Transforms all characters to uppercase.
- lowercase: Transforms all characters to lowercase.
- initial: Sets this property to its default value.
- inherit: Inherits this property from its parent element.

text-shadow: adds shadow to text.


---
