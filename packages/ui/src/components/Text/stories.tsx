import { Meta, StoryObj } from "@storybook/react"

import { Text } from "./index"

const meta: Meta<typeof Text> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text",
  component: Text,
  argTypes: {
    tag: {
      options: ["p", "span"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Hello world",
  },
}

export default meta

export const Default: StoryObj<typeof Text> = {
  render: (props) => <Text {...props} />,
}

export const NativeDemo: StoryObj<typeof Text> = {
  render: (props) => {
    return (
      <article>
        {/* <h1 className="display">Native Text Examples</h1> */}
        <section>
          <h1 className="display">Display heading</h1>
          <h1>H1 heading</h1>
          <p>
            Emerged into consciousness radio telescope dispassionate
            extraterrestrial observer Sea of Tranquility vastness is bearable
            only through love the only home we've ever known. Permanence of the
            stars Euclid tendrils of gossamer clouds invent the universe
            permanence of the stars invent the universe? Extraordinary claims
            require extraordinary evidence the carbon in our apple pies shores
            of the cosmic ocean kindling the energy hidden in matter from which
            we spring stirred by starlight.
          </p>
          <h2>H2 heading</h2>
          <p>
            From which we spring shores of the cosmic ocean kindling the energy
            hidden in matter citizens of distant epochs rogue a billion
            trillion. Descended from astronomers the carbon in our apple pies
            emerged into consciousness something incredible is waiting to be
            known Apollonius of Perga tingling of the spine. Hearts of the stars
            cosmic ocean two ghostly white figures in coveralls and helmets are
            softly dancing realm of the galaxies cosmic fugue a still more
            glorious dawn awaits.
          </p>
          <h3>H3 heading</h3>
          <p>
            Ship of the imagination the sky calls to us intelligent beings prime
            number kindling the energy hidden in matter take root and flourish?
            Tunguska event stirred by starlight white dwarf extraordinary claims
            require extraordinary evidence cosmic fugue with pretty stories for
            which there&apos;s little good evidence. A mote of dust suspended in
            a sunbeam at the edge of forever concept of the number one invent
            the universe preserve and cherish that pale blue dot brain is the
            seed of intelligence?
          </p>
          <h4>H4 heading</h4>
          <p>
            Kindling the energy hidden in matter paroxysm of global death of
            brilliant syntheses preserve and cherish that pale blue dot take
            root and flourish shores of the cosmic ocean. Drake Equation another
            world the sky calls to us something incredible is waiting to be
            known a mote of dust suspended in a sunbeam invent the universe?
            Rich in mystery bits of moving fluff tingling of the spine courage
            of our questions Euclid dream of the mind&apos;s eye?
          </p>
          <h5>H5 heading</h5>
          <p>
            Extraplanetary hydrogen atoms are creatures of the cosmos
            explorations ship of the imagination cosmic fugue. Rig Veda Rig Veda
            Flatland network of wormholes rich in mystery venture. The ash of
            stellar alchemy vastness is bearable only through love from which we
            spring vanquish the impossible something incredible is waiting to be
            known extraordinary claims require extraordinary evidence. A very
            small stage in a vast cosmic arena another world stirred by
            starlight made in the interiors of collapsing stars star stuff
            harvesting star light made in the interiors of collapsing stars and
            billions upon billions upon billions upon billions upon billions
            upon billions upon billions.
          </p>
          <h6>H6 heading</h6>
          <p>
            Galaxies Rig Veda how far away inconspicuous motes of rock and gas
            circumnavigated two ghostly white figures in coveralls and helmets
            are softly dancing. Bits of moving fluff finite but unbounded finite
            but unbounded finite but unbounded another world not a sunrise but a
            galaxyrise. The ash of stellar alchemy the ash of stellar alchemy at
            the edge of forever globular star cluster a still more glorious dawn
            awaits preserve and cherish that pale blue dot?
          </p>
        </section>
        <hr />
        <section>
          <h4>Baseline phrases</h4>
          Here&apos;s some example text with <sub>subscript</sub> and{" "}
          <sup>superscript</sup> examples.
        </section>
        <section>
          <h4>Scaled phrases</h4>
          Here&apos;s some example <small>small text</small>. Here&apos;s more
          example text using the <span className="sm">small</span>and{" "}
          <span className="lg">large</span> scales.
          <p className="legal">This text is a boring legal disclaimer.</p>
        </section>
        <section>
          <h4>Lists</h4>
          <p>
            Rich in mystery consciousness citizens of distant epochs venture
            emerged into consciousness rings of Uranus.
          </p>
          <h5>Unordered List</h5>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>
              <strong className="title">Nested list</strong>
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </li>
          </ul>
          <h5>Ordered List</h5>
          <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>
              <strong className="title">Nested list</strong>
              <ol>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ol>
            </li>
          </ol>
        </section>
      </article>
    )
  },
}
