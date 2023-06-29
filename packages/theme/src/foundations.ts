import * as Border from "./border"
import * as Colorway from "./colorway"
import * as Outline from "./outline"
import * as Line from "./line"
import * as Radius from "./radius"
import * as Scale from "./scale"
import * as Spacing from "./spacing"
import * as Typography from "./typography"
import * as Typography2 from "./typography2"

type BaseFoundations<B, C, L, O, R, SS, S, T, TT> = {
  border: B
  colorway: C
  line: L
  outline: O
  radius: R
  scale: SS
  spacing: S
  typography: T
  typography2: TT
}

export type FoundationsConfig = BaseFoundations<
  Border.Config,
  Colorway.Config,
  Line.Config,
  Outline.Config,
  Radius.Config,
  Scale.Config,
  Spacing.Config,
  Typography.Config,
  Typography2.Config
>

export type Foundations = BaseFoundations<
  Border.Config,
  Colorway.Foundations,
  Line.Config,
  Outline.Config,
  Radius.Config,
  Scale.Foundations,
  Spacing.Config,
  Typography.Config,
  Typography2.Config
>

export const makeFoundations = ({
  colorway,
  scale,
  // typography2,
  ...foundations
}: FoundationsConfig): Foundations => ({
  colorway: Colorway.makeFoundations(colorway),
  scale: Scale.makeFoundations(scale),
  // typography2: Typography2.makeFoundations(typography2),
  ...foundations,
})
