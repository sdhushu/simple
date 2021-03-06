import {createApp} from 'vue'
import  simpledialog from "./Dialog.vue"

export default function Dialog(data) {
    let message,title,confirmButton,cancelButton
    typeof data == "object" ? {title,message,confirmButton,cancelButton} = data : title = data
    let show = true
    let dialog = createApp(simpledialog, {
        message,
        title,
        show,
        confirmButton,
        cancelButton
    })
    let divElement = document.createElement('div')
    document.body.appendChild(divElement)
    dialog.mount(divElement)
}
