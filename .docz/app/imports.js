export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/_demo/colors.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-demo-colors" */ 'components/_demo/colors.mdx'
    ),
  'components/_demo/spacing.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-demo-spacing" */ 'components/_demo/spacing.mdx'
    ),
  'components/buttons/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-buttons-button" */ 'components/buttons/button.mdx'
    ),
  'components/data-tables/data-table-async.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-data-tables-data-table-async" */ 'components/data-tables/data-table-async.mdx'
    ),
  'components/data-tables/data-table.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-data-tables-data-table" */ 'components/data-tables/data-table.mdx'
    ),
  'components/images/image-frame.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-images-image-frame" */ 'components/images/image-frame.mdx'
    ),
  'components/images/picture.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-images-picture" */ 'components/images/picture.mdx'
    ),
  'components/forms/field.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-field" */ 'components/forms/field.mdx'
    ),
  'components/forms/fieldset.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-fieldset" */ 'components/forms/fieldset.mdx'
    ),
  'components/forms/group-inline.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-group-inline" */ 'components/forms/group-inline.mdx'
    ),
  'components/forms/group.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-group" */ 'components/forms/group.mdx'
    ),
  'components/forms/input-message.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-input-message" */ 'components/forms/input-message.mdx'
    ),
  'components/links/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-links-button" */ 'components/links/button.mdx'
    ),
  'components/links/email.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-links-email" */ 'components/links/email.mdx'
    ),
  'components/links/link.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-links-link" */ 'components/links/link.mdx'
    ),
  'components/links/phone.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-links-phone" */ 'components/links/phone.mdx'
    ),
  'components/layout/button-container.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-button-container" */ 'components/layout/button-container.mdx'
    ),
  'components/layout/footer.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-footer" */ 'components/layout/footer.mdx'
    ),
  'components/layout/parallax.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-parallax" */ 'components/layout/parallax.mdx'
    ),
  'components/layout/scroll-pages.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-scroll-pages" */ 'components/layout/scroll-pages.mdx'
    ),
  'components/layout/scroll-progress.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-scroll-progress" */ 'components/layout/scroll-progress.mdx'
    ),
  'components/layout/section.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-section" */ 'components/layout/section.mdx'
    ),
  'components/layout/stacked.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-stacked" */ 'components/layout/stacked.mdx'
    ),
  'components/lists/item.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-lists-item" */ 'components/lists/item.mdx'
    ),
  'components/lists/ordered.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-lists-ordered" */ 'components/lists/ordered.mdx'
    ),
  'components/lists/steps.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-lists-steps" */ 'components/lists/steps.mdx'
    ),
  'components/lists/symbols.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-lists-symbols" */ 'components/lists/symbols.mdx'
    ),
  'components/lists/unordered.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-lists-unordered" */ 'components/lists/unordered.mdx'
    ),
  'components/nav/nav.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-nav" */ 'components/nav/nav.mdx'
    ),
  'components/nav/stacked.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-stacked" */ 'components/nav/stacked.mdx'
    ),
  'components/nav/pagination.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-pagination" */ 'components/nav/pagination.mdx'
    ),
  'components/svg/svg.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-svg-svg" */ 'components/svg/svg.mdx'
    ),
  'components/tables/table.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-tables-table" */ 'components/tables/table.mdx'
    ),
  'components/sliders/double.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-sliders-double" */ 'components/sliders/double.mdx'
    ),
  'components/sliders/slider.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-sliders-slider" */ 'components/sliders/slider.mdx'
    ),
  'components/notifications/alert.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-notifications-alert" */ 'components/notifications/alert.mdx'
    ),
  'components/notifications/flash.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-notifications-flash" */ 'components/notifications/flash.mdx'
    ),
  'components/typography/disclaimer.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-typography-disclaimer" */ 'components/typography/disclaimer.mdx'
    ),
  'components/typography/notes.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-typography-notes" */ 'components/typography/notes.md'
    ),
  'components/visuals/meter.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-visuals-meter" */ 'components/visuals/meter.mdx'
    ),
  'components/visuals/progress.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-visuals-progress" */ 'components/visuals/progress.mdx'
    ),
  'components/charts/pie/pie.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-charts-pie-pie" */ 'components/charts/pie/pie.mdx'
    ),
  'components/charts/line/line-chart.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-charts-line-line-chart" */ 'components/charts/line/line-chart.mdx'
    ),
  'components/forms/inputs/hidden.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-inputs-hidden" */ 'components/forms/inputs/hidden.mdx'
    ),
  'components/forms/inputs/input.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-inputs-input" */ 'components/forms/inputs/input.mdx'
    ),
  'components/forms/inputs/textarea.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-inputs-textarea" */ 'components/forms/inputs/textarea.mdx'
    ),
  'components/forms/toggles/checkbox.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-toggles-checkbox" */ 'components/forms/toggles/checkbox.mdx'
    ),
  'components/forms/toggles/radio.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-toggles-radio" */ 'components/forms/toggles/radio.mdx'
    ),
  'components/layout/flex/box.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-flex-box" */ 'components/layout/flex/box.mdx'
    ),
  'components/layout/header/header.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-header-header" */ 'components/layout/header/header.mdx'
    ),
  'components/layout/header/header-sticky-content.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-header-header-sticky-content" */ 'components/layout/header/header-sticky-content.mdx'
    ),
  'components/layout/panel/panel.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-panel-panel" */ 'components/layout/panel/panel.mdx'
    ),
  'components/layout/panel/title-bar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-panel-title-bar" */ 'components/layout/panel/title-bar.mdx'
    ),
  'components/layout/grid/area.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-grid-area" */ 'components/layout/grid/area.mdx'
    ),
  'components/layout/grid/columns.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-grid-columns" */ 'components/layout/grid/columns.mdx'
    ),
  'components/layout/grid/grid-guide.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-grid-grid-guide" */ 'components/layout/grid/grid-guide.mdx'
    ),
  'components/layout/grid/grid.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-layout-grid-grid" */ 'components/layout/grid/grid.mdx'
    ),
  'components/nav/items/item.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-items-item" */ 'components/nav/items/item.mdx'
    ),
  'components/nav/items/menu.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-items-menu" */ 'components/nav/items/menu.mdx'
    ),
  'components/nav/items/sticky.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-nav-items-sticky" */ 'components/nav/items/sticky.mdx'
    ),
  'components/typography/headings/copy.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-typography-headings-copy" */ 'components/typography/headings/copy.mdx'
    ),
  'components/typography/headings/hero.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-typography-headings-hero" */ 'components/typography/headings/hero.mdx'
    ),
  'components/typography/headings/section-sub.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-typography-headings-section-sub" */ 'components/typography/headings/section-sub.mdx'
    ),
  'components/typography/headings/section.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-typography-headings-section" */ 'components/typography/headings/section.mdx'
    ),
  'components/visuals/us-map/us-map.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-visuals-us-map-us-map" */ 'components/visuals/us-map/us-map.mdx'
    ),
  'components/forms/selects/select/async.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-selects-select-async" */ 'components/forms/selects/select/async.mdx'
    ),
  'components/forms/selects/select/native.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-selects-select-native" */ 'components/forms/selects/select/native.mdx'
    ),
  'components/forms/selects/select/select.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-selects-select-select" */ 'components/forms/selects/select/select.mdx'
    ),
  'components/forms/selects/multiselect/async.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-selects-multiselect-async" */ 'components/forms/selects/multiselect/async.mdx'
    ),
  'components/forms/selects/multiselect/multiselect.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-selects-multiselect-multiselect" */ 'components/forms/selects/multiselect/multiselect.mdx'
    ),
  'components/forms/selects/multiselect/native.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components-forms-selects-multiselect-native" */ 'components/forms/selects/multiselect/native.mdx'
    ),
}
