// Components
import Accordion from './components/Accordion.vue'
import AttachmentList from './components/AttachmentList.vue'
import Avatar from './components/Avatar.vue'
import AvatarGroup from './components/AvatarGroup.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Checkbox from './components/Checkbox.vue'
import ClickableTag from './components/ClickableTag.vue'
import CurrencyInput from './components/CurrencyInput.vue'
import DatePicker from './components/DatePicker.vue'
import DragAndDropFiles from './components/DragAndDropFiles.vue'
import DropdownOptions from './components/DropdownOptions.vue'
import Dropzone from './components/Dropzone.vue'
import FileButton from './components/FileButton.vue'
import FlashMessage from './components/FlashMessage.vue'
import IconButton from './components/IconButton.vue'
import Loader from './components/Loader.vue'
import MediaCarousel from './components/MediaCarousel.vue'
import MediaInput from './components/MediaInput.vue'
import NumberInput from './components/NumberInput.vue'
import Paragraph from './components/Paragraph.vue'
import Radio from './components/Radio.vue'
import RichTextEditor from './components/RichTextEditor.vue'
import Select from './components/Select.vue'
import Stepper from './components/Stepper.vue'
import StopPropagation from './components/StopPropagation.vue'
import Tabs from './components/Tabs.vue'
import Tag from './components/Tag.vue'
import Textarea from './components/Textarea.vue'
import Textbox from './components/Textbox.vue'
import Toggle from './components/Toggle.vue'
import Tooltip from './components/Tooltip.vue'

// Composables
import { useFiles } from './composables/useFiles'
import { useIsHandheld } from './composables/useIsHandheld'

// Named exports for tree-shaking
export {
    Accordion,
    AttachmentList,
    Avatar,
    AvatarGroup,
    Badge,
    Button,
    Card,
    Checkbox,
    ClickableTag,
    CurrencyInput,
    DatePicker,
    DragAndDropFiles,
    DropdownOptions,
    Dropzone,
    FileButton,
    FlashMessage,
    IconButton,
    Loader,
    MediaCarousel,
    MediaInput,
    NumberInput,
    Paragraph,
    Radio,
    RichTextEditor,
    Select,
    Stepper,
    StopPropagation,
    Tabs,
    Tag,
    Textarea,
    Textbox,
    Toggle,
    Tooltip,
    useFiles,
    useIsHandheld
}

// Default export for Vue.use()
export default {
    install(app) {
        app.component('Accordion', Accordion)
        app.component('AttachmentList', AttachmentList)
        app.component('Avatar', Avatar)
        app.component('AvatarGroup', AvatarGroup)
        app.component('Badge', Badge)
        app.component('Button', Button)
        app.component('Card', Card)
        app.component('Checkbox', Checkbox)
        app.component('ClickableTag', ClickableTag)
        app.component('CurrencyInput', CurrencyInput)
        app.component('DatePicker', DatePicker)
        app.component('DragAndDropFiles', DragAndDropFiles)
        app.component('DropdownOptions', DropdownOptions)
        app.component('Dropzone', Dropzone)
        app.component('FileButton', FileButton)
        app.component('FlashMessage', FlashMessage)
        app.component('IconButton', IconButton)
        app.component('Loader', Loader)
        app.component('MediaCarousel', MediaCarousel)
        app.component('MediaInput', MediaInput)
        app.component('NumberInput', NumberInput)
        app.component('Paragraph', Paragraph)
        app.component('Radio', Radio)
        app.component('RichTextEditor', RichTextEditor)
        app.component('Select', Select)
        app.component('Stepper', Stepper)
        app.component('StopPropagation', StopPropagation)
        app.component('Tabs', Tabs)
        app.component('Tag', Tag)
        app.component('Textarea', Textarea)
        app.component('Textbox', Textbox)
        app.component('Toggle', Toggle)
        app.component('Tooltip', Tooltip)
    }
}
