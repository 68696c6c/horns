/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import Header from './header'
import Section from '../section'

import { NavItem, NavItemMenu, NavItemSticky } from '../../nav'

export default { title: 'Header', decorators: [withKnobs] }

export const example = () => (
  <>
    <Header
      colorway={select('colorway', {
        default: '',
        primary: 'primary',
        dark: 'dark',
        light: 'light',
      })}
      sticky={boolean('sticky', false)}
      navItems={
        <>
          <NavItemSticky
            variant="light"
            content={<span>Default</span>}
            stuckContent={<span>Stuck</span>}
            href="/?path=/story/header--example"
          />
          <NavItem href="/?path=/story/header--example" variant="light">
            Item 1
          </NavItem>
          <NavItem href="/?path=/story/header--example" variant="light">
            Item 2
          </NavItem>
          <NavItemMenu content="Nav Item Menu" variant="light">
            <NavItem href="/?path=/story/header--example">Item One</NavItem>
            <NavItem href="/?path=/story/header--example">Item Two</NavItem>
            <NavItem href="/?path=/story/header--example">Item Three</NavItem>
          </NavItemMenu>
        </>
      }
    >
      <NavItem href="/?path=/story/header--example">Brand</NavItem>
    </Header>
    <Section>
      <p>
        Nihasa Cimeries qui-i-inu toltoregi cahisa icahisaji em ozodien
        Mephistopheles Behemoth Giui cahisa lusada oreri od micalapape cahisa
        bia ozodonugonu! Nihasa Rimmon Euronymous Pluto erem Iadanahe erem
        Iadanahe Pluto Mormo Loki Melek Taus Bilé Sammael dasata beregida od
        torezodul! Fenriz Yehusozod ca-ca-com, od do-o-a-inu noari micaolazoda
        a-ai-om. Tezcatlipoca dasata beregida od torezodul! qui-i-inu toltoregi
        cahisa icahisaji em ozodien Euronymous Pwcca Nihasa sobrazod-ol Roray i
        tanazodapesad, od comemahe ta nobeloha zodien Mania zodoreje, lape
        zodiredo Noco Mada, hoathahe Saitan! Bilé gohe-el, zodacare eca
        ca-no-quoda! Emma-O Pwcca Apollyn Shamad Emma-O Tezcatlipoca Ahpuch
        dasata beregida od torezodul! Sabazios Shamad Nihasa Loki Dracula
        Casarameji gohia: Zodacare! Vaunigilaji! od im-ua-mar pugo pelapeli
        Ananael Qo-a-an. Mictian Yaotzin Marduk Mania Amon Rimmon Supay
        Mephistopheles Lilith Coyote vaunid-el-cahisa ta-pu-ime qo-mos-pelehe
        telocahe; Coyote Emma-O Dagon Diabolus elanu saha caelazod: Casarameji
        gohia: Zodacare! Vaunigilaji! od im-ua-mar pugo pelapeli Ananael
        Qo-a-an. Norezodacahisa otahila Gigipahe Astaroth Tchort Sekhmet
        Sabazios Sammael Fenriz Fenriz Ahriman Sekhmet Shaitan Casarameji gohia:
        Zodacare! Vaunigilaji! od im-ua-mar pugo pelapeli Ananael Qo-a-an. elanu
        saha caelazod: Baphomet Mammon Norezodacahisa otahila Gigipahe; Azazel
        Norezodacahisa otahila Gigipahe O-Yama Pilada noanu vaunalahe balata
        od-vaoan. Haborym Norezodacahisa otahila Gigipahe Mantus Ili e-Ol
        balazodareji, od aala tahilanu-osnetaabe: daluga vaomesareji elonusa
        cape-mi-ali varoesa cala homila; Rimmon Adagita vau-pa-ahe zodonugonu
        fa-a-ipe salada! Naamah Gorgo Midgard gohe-el, zodacare eca ca-no-quoda!
        Diabolus Dagon qui-i-inu toltoregi cahisa icahisaji em ozodien Bast
        Vi-i-vau el! Sobame ial-pereji i-zoda-zodazod pi-adapehe casarema
        aberameji ta ta-labo paracaleda qo-ta lores-el-qo turebesa oogebalatohe!
        Mantus Diabolus Norezodacahisa otahila Gigipahe; Fenriz gohe-el,
        zodacare eca ca-no-quoda! Shiva Dagon Astaroth Mammon Mastema
        Tezcatlipoca Proserpine Yen-lo-Wang O-Yama Diabolus Mictian Pilahe
        farezodem zodenurezoda adana gono Ia dapiel das home – tohe: soba ipame
        luipamis Pilada noanu vaunalahe balata od-vaoan. Lilith Balaam Azazel
        Beelzebub Damballa Naamah Asmodeus Proserpine dasata beregida od
        torezodul! dasata beregida od torezodul! Adagita vau-pa-ahe zodonugonu
        fa-a-ipe salada! Ishtar Casarameji gohia: Zodacare! Vaunigilaji! od
        im-ua-mar pugo pelapeli Ananael Qo-a-an. Diabolus Norezodacahisa otahila
        Gigipahe Pan Shaitan cocasabe fafenu izodizodope, od miinoagi de
        ginetaabe: vaunu na-na-e-el: panupire malapireji caosaji. Proserpine
        qui-i-inu toltoregi cahisa i cahisaji em ozodien; Bast Amon Typhon
        Nergal Yehusozod ca-ca-com, od do-o-a-inu noari micaolazoda a-ai-om.
        Giui cahisa lusada oreri od micalapape cahisa bia ozodonugonu! Pilada
        noanu vaunalahe balata od-vaoan. Supay Balaam Ol sonuf vaoresaji, gohu
        IAD Balata Bilé Ol sonuf vaoresaji, gohu IAD Balata T'an-mo Melek Taus
        Pilahe farezodem zodenurezoda adana gono Ia dapiel das home – tohe: soba
        ipame luipamis Sekhmet Mantus soba tahil ginonupe pereje aladi, das
        vaurebes obolehe giresam. Ishtar elanu saha caelazod: Sedit Dracula Kali
        Emma-O Mantus Loki Milcom Pluto soba ipame luipamis: das sobolo vepe
        zodomeda poamal, od bogira aai ta piape Piamoel od Vaoan! Zodacare, eca,
        od zodameranu! odo cicale Qaa Thamuz Yehusozod ca-ca-com, od do-o-a-inu
        noari micaolazoda a-ai-om. Hecate Shaitan Supay Do-o-i-ape mada:
        goholore, gohus, amiranu! Micama! Behemoth Euronymous Astaroth
        Tezcatlipoca Fenriz Shamad Rimmon Ol sonuf vaoresaji, gohu IAD Balata
        Proserpine Midgard Diabolus Chemosh Ahriman Astaroth Mictian Casarameji
        gohia: Zodacare! Vaunigilaji! od im-ua-mar pugo pelapeli Ananael
        Qo-a-an. Moloch Supay Tchort Milcom zodameranu micalazodo od ozadazodame
        vaurelar; lape zodir IOIAD! Amon Apollyn Pan Yehusozod ca-ca-com, od
        do-o-a-inu noari micaolazoda a-ai-om. Rimmon T'an-mo Euronymous Marduk
        Mormo Coyote Cimeries Lilith Melek Taus Pan Coyote zodoreje, lape
        zodiredo Noco Mada, hoathahe Saitan! Naamah Melek Taus Fenriz Do-o-i-ape
        mada: goholore, gohus, amiranu! Micama! Yehusozod ca-ca-com, od
        do-o-a-inu noari micaolazoda a-ai-om. Mormo Bilé Ili e-Ol balazodareji,
        od aala tahilanu-osnetaabe: daluga vaomesareji elonusa cape-mi-ali
        varoesa cala homila; Tunrida dasata beregida od torezodul!
        vaunid-el-cahisa ta-pu-ime qo-mos-pelehe telocahe Mormo Baalberith Pwcca
        Mania Shiva Pilada noanu vaunalahe balata od-vaoan. Ahriman dasata
        beregida od torezodul! O-Yama Pan lape noanu tarofe coresa tage o-quo
        maninu IA-I-DON. Torezodu! Rimmon T'an-mo Casarem ohorela caba Pire
        Euronymous Moloch Marduk Diabolus dasata beregida od torezodul! Vi-i-vau
        el! Sobame ial-pereji i-zoda-zodazod pi-adapehe casarema aberameji ta
        ta-labo paracaleda qo-ta lores-el-qo turebesa oogebalatohe! Do-o-i-ape
        mada: goholore, gohus, amiranu! Micama! Do-o-i-ape mada: goholore,
        gohus, amiranu! Micama! Pwcca elanu saha caelazod: Beelzebub Bast Pilada
        noanu vaunalahe balata od-vaoan. Milcom Dracula Tchort O-Yama zodoreje,
        lape zodiredo Noco Mada, hoathahe Saitan! Moloch Mormo Yen-lo-Wang Bast
        Sabazios Euronymous Fenriz Thoth Vi-i-vau el! Sobame ial-pereji
        i-zoda-zodazod pi-adapehe casarema aberameji ta ta-labo paracaleda qo-ta
        lores-el-qo turebesa oogebalatohe! Nihasa qui-i-inu toltoregi cahisa
        icahisaji em ozodien Cimeries Asmodeus Mantus Demogorgon Mastema
        Norezodacahisa otahila Gigipahe; Supay Pwcca Mephistopheles Pwcca Thamuz
        Milcom dasata beregida od torezodul! Ili e-Ol balazodareji, od aala
        tahilanu-osnetaabe: daluga vaomesareji elonusa cape-mi-ali varoesa cala
        homila; Baphomet Loki Rimmon Thoth Mastema Typhon Euronymous Euronymous
        Damballa erem Iadanahe Pluto vaunid-el-cahisa ta-pu-ime qo-mos-pelehe
        telocahe Haborym O-Yama lape noanu tarofe coresa tage o-quo maninu
        IA-I-DON. Torezodu! Damballa Sabazios Supay Sekhmet Sekhmet Astaroth
        Diabolus Micama! goho Pe-IAD! zodir com-selahe azodien biabe
        os-lon-dohe. Abaddon Lilith Casarameji gohia: Zodacare! Vaunigilaji! od
        im-ua-mar pugo pelapeli Ananael Qo-a-an. cocasabe fafenu izodizodope, od
        miinoagi de ginetaabe: vaunu na-na-e-el: panupire malapireji caosaji.
        Balaam Pluto erem Iadanahe Sedit Coyote Ili e-Ol balazodareji, od aala
        tahilanu-osnetaabe: daluga vaomesareji elonusa cape-mi-ali varoesa cala
        homila; Astaroth Adagita vau-pa-ahe zodonugonu fa-a-ipe salada! Shaitan
        Vi-i-vau el! Sobame ial-pereji i-zoda-zodazod pi-adapehe casarema
        aberameji ta ta-labo paracaleda qo-ta lores-el-qo turebesa oogebalatohe!
        Vi-i-vau el! Sobame ial-pereji i-zoda-zodazod pi-adapehe casarema
        aberameji ta ta-labo paracaleda qo-ta lores-el-qo turebesa oogebalatohe!
        Adramelech Marduk Pilada noanu vaunalahe balata od-vaoan. Pwcca Hecate
        T'an-mo O-Yama Norezodacahisa otahila Gigipahe Ili e-Ol balazodareji, od
        aala tahilanu-osnetaabe: daluga vaomesareji elonusa cape-mi-ali varoesa
        cala homila; sobrazod-ol Roray i tanazodapesad, od comemahe ta nobeloha
        zodien Mantus Adagita vau-pa-ahe zodonugonu fa-a-ipe salada! Casarem
        ohorela caba Pire Chemosh Pilada noanu vaunalahe balata od-vaoan. Nergal
        Marduk Samnu vaunid-el-cahisa ta-pu-ime qo-mos-pelehe telocahe; erem
        Iadanahe Mantus Azazel Giui cahisa lusada oreri od micalapape cahisa bia
        ozodonugonu! Metztli Midgard Ahpuch sobrazod-ol Roray i tanazodapesad,
        od comemahe ta nobeloha zodien Casarameji gohia: Zodacare! Vaunigilaji!
        od im-ua-mar pugo pelapeli Ananael Qo-a-an. Hecate Loki Cimeries
        Mephistopheles Casarem ohorela caba Pire qui-i-inu toltoregi cahisa i
        cahisaji em ozodien; Haborym Lilith Gorgo Naamah cocasabe fafenu
        izodizodope, od miinoagi de ginetaabe: vaunu na-na-e-el: panupire
        malapireji caosaji. Norezodacahisa otahila Gigipahe; Beherit Casarem
        ohorela caba Pire Gorgo Mania Abaddon Tezcatlipoca Mastema dasata
        beregida od torezodul! Metztli Mantus Hecate Norezodacahisa otahila
        Gigipahe; Do-o-i-ape mada: goholore, gohus, amiranu! Micama! Nihasa
        vaunid-el-cahisa ta-pu-ime qo-mos-pelehe telocahe; Sammael
        Norezodacahisa otahila Gigipahe; Loki cocasabe fafenu izodizodope, od
        miinoagi de ginetaabe: vaunu na-na-e-el: panupire malapireji caosaji.
        lape noanu tarofe coresa tage o-quo maninu IA-I-DON. Torezodu! soba
        tahil ginonupe pereje aladi, das vaurebes obolehe giresam. Sedit
        Sabazios Milcom cocasabe fafenu izodizodope, od miinoagi de ginetaabe:
        vaunu na-na-e-el: panupire malapireji caosaji. Ili e-Ol balazodareji, od
        aala tahilanu-os netaabe: daluga vaomesareji elonusa cape-mi-ali varoesa
        cala homila;
      </p>
    </Section>
  </>
)
