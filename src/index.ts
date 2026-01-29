import './styles/style.css'
import 'vue-final-modal/style.css'
import 'v-dropdown-menu/css'

import { createVfm } from 'vue-final-modal'

export { Accordion } from './components/Accordion/index.ts'
export { AttachmentList } from './components/AttachmentList/index.ts'
export { Avatar } from './components/Avatar/index.ts'
export { AvatarGroup } from './components/AvatarGroup/index.ts'
export { Badge } from './components/Badge/index.ts'
export { Button } from './components/Button/index.ts'
export { Card } from './components/Card/index.ts'
export { Checkbox } from './components/Checkbox/index.ts'
export { ClickableTag } from './components/ClickableTag/index.ts'
export { CodeSnippet } from './components/CodeSnippet/index.ts'
export { CurrencyInput } from './components/CurrencyInput/index.ts'
export { DatePicker } from './components/DatePicker/index.ts'
export { DragAndDropFiles } from './components/DragAndDropFiles/index.ts'
export { DropdownMenu } from './components/DropdownMenu/index.ts'
export { DropdownOptions } from './components/DropdownOptions/index.ts'
export { Dropzone } from './components/Dropzone/index.ts'
export { FileButton } from './components/FileButton/index.ts'
export { FileList } from './components/FileList/index.ts'
export { HoverBox } from './components/HoverBox/index.ts'
export { IconButton } from './components/IconButton/index.ts'
export { Loader } from './components/Loader/index.ts'
export { MediaCarousel } from './components/MediaCarousel/index.ts'
export { MediaInput } from './components/MediaInput/index.ts'
export { Modal } from './components/Modal/index.ts'
export { Multiselect } from './components/Multiselect/index.ts'
export { NumberInput } from './components/NumberInput/index.ts'
export { Paragraph } from './components/Paragraph/index.ts'
export { Radio } from './components/Radio/index.ts'
export { Select } from './components/Select/index.ts'
export { Stepper } from './components/Stepper/index.ts'
export { StopPropagation } from './components/StopPropagation/index.ts'
export { TableCard } from './components/TableCard/index.ts'
export { Tabs } from './components/Tabs/index.ts'
export { Tag } from './components/Tag/index.ts'
export { Textarea } from './components/Textarea/index.ts'
export { Textbox } from './components/Textbox/index.ts'
export { ToastContainer } from './components/Toast/index.js'
export { Toggle } from './components/Toggle/index.ts'
export { Tooltip } from './components/Tooltip/index.ts'
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