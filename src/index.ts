import './styles/style.css'
import 'vue-final-modal/style.css'
import 'v-dropdown-menu/css'

import { createVfm } from 'vue-final-modal'

export { Accordion } from './components/Accordion/index.ts'
export { AttachmentList } from './components/AttachmentList/index.ts'
export { Avatar } from './components/Avatar/index.js'
export { AvatarGroup } from './components/AvatarGroup/index.js'
export { Badge } from './components/Badge/index.js'
export { Button } from './components/Button/index.js'
export { Card } from './components/Card/index.js'
export { Checkbox } from './components/Checkbox/index.js'
export { ClickableTag } from './components/ClickableTag/index.js'
export { CodeSnippet } from './components/CodeSnippet/index.js'
export { CurrencyInput } from './components/CurrencyInput/index.js'
export { DatePicker } from './components/DatePicker/index.js'
export { DragAndDropFiles } from './components/DragAndDropFiles/index.js'
export { DropdownMenu } from './components/DropdownMenu/index.js'
export { DropdownOptions } from './components/DropdownOptions/index.js'
export { Dropzone } from './components/Dropzone/index.js'
export { FileButton } from './components/FileButton/index.js'
export { FileList } from './components/FileList/index.js'
export { HoverBox } from './components/HoverBox/index.js'
export { IconButton } from './components/IconButton/index.js'
export { Loader } from './components/Loader/index.js'
export { MediaCarousel } from './components/MediaCarousel/index.js'
export { MediaInput } from './components/MediaInput/index.js'
export { Modal } from './components/Modal/index.js'
export { Multiselect } from './components/Multiselect/index.js'
export { NumberInput } from './components/NumberInput/index.js'
export { Paragraph } from './components/Paragraph/index.js'
export { Radio } from './components/Radio/index.js'
export { Select } from './components/Select/index.js'
export { Stepper } from './components/Stepper/index.js'
export { StopPropagation } from './components/StopPropagation/index.js'
export { TableCard } from './components/TableCard/index.js'
export { Tabs } from './components/Tabs/index.js'
export { Tag } from './components/Tag/index.js'
export { Textarea } from './components/Textarea/index.js'
export { Textbox } from './components/Textbox/index.js'
export { ToastContainer } from './components/Toast/index.js'
export { Toggle } from './components/Toggle/index.js'
export { Tooltip } from './components/Tooltip/index.js'
export { useFiles } from './composables/useFiles.ts'
export { useIsHandheld } from './composables/useIsHandheld.ts'
export { useToast } from './composables/useToast.js'

// Export types
export type { FormattedFile, FileInput } from './types/file'

export default {
    install(app) {
        const vfm = createVfm()
        app.use(vfm)
    }
}