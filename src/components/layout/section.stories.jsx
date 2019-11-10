import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import Section from './section'

export default { title: 'Section', decorators: [withKnobs] }

export const example = () => (
  <Section
    colorway={select('colorway', {
      default: '',
      warning: 'warning',
      danger: 'danger',
      info: 'info',
    })}
    contained={boolean('contained', false)}
    padded={boolean('padded', true)}
  >
    <p>
      {text(
        'content',
        `Loki O-Yama Shamad Beelzebub elanu saha caelazod: Do-o-i-ape mada: goholore, gohus, amiranu! Micama! Yehusozod ca-ca-com, od do-o-a-inu noari micaolazoda a-ai-om. Dagon Sedit Dracula Casarameji gohia: Zodacare! Vaunigilaji! od im-ua-mar pugo pelapeli Ananael Qo-a-an. Beelzebub Marduk Do-o-i-ape mada: goholore, gohus, amiranu! Micama! Hecate Ili e-Ol balazodareji, od aala tahilanu-os netaabe: daluga vaomesareji elonusa cape-mi-ali varoesa cala homila; Astaroth Mammon Ishtar Shiva Damballa Mania Sekhmet Ahriman Mormo`
      )}
    </p>
  </Section>
)
