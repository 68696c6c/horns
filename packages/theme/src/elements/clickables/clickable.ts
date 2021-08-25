import * as Interactive from '../interactive'

// Buttons and Links are just InteractiveElements.  Since they are the same type, they are
// interchangeable, making it possible to do questionable things like presenting a link tag as a
// button.
type Clickable<BaseType> = BaseType & {
  variant: 'button' | 'link'
}

export interface Config extends Clickable<Interactive.Config> {}

export interface Props extends Clickable<Interactive.Props> {}

export interface Theme extends Clickable<Interactive.Theme> {}
