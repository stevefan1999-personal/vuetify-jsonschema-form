import basic from './basic'
import datePicker from './date-picker'
import colorPicker from './color-picker'
import select from './select'
import selectHTTP from './select-http'
import selectIcon from './select-icon'
import selectDeps from './select-deps'
import selectSubschemas from './select-subschemas'
import sections from './sections'
import sectionsExpansionPanels from './sections-expansion-panels'
import sectionsTab from './sections-tabs'
import vuetifyProps from './vuetify-props'
import slots from './slots'
import validationBasic from './validation-basic'
import validationSections from './validation-sections'
import editableArray from './editable-array'

const examples = [
  basic,
  datePicker,
  colorPicker,
  select,
  selectHTTP,
  selectIcon,
  selectDeps,
  selectSubschemas,
  sections,
  sectionsExpansionPanels,
  sectionsTab,
  vuetifyProps,
  slots,
  validationBasic,
  validationSections,
  editableArray
]

const defaultTemplate = '<v-jsf v-model="model" :schema="schema" :options="options" />'

export { examples, defaultTemplate }
