import toast from "react-hot-toast";

export const doCopy = (val: string) => {
    try {
        const _box = document.getElementById('copy-adaptor') as HTMLInputElement
        _box.value = val
        _box.select()
        document.execCommand('copy', true)
        toast.success('[OK] copied!')
    }
    catch (e) {
        console.error(e)
        toast.error('[Error] fail to copy!')
    }
}