import {useForm} from "react-hook-form";
import {Params} from "@/shared/utils/params";

const matchLink = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
export const useSearch = () => {
    const params = new Params<{ text?: string, q?: string }>()
    const form = useForm({
        defaultValues: {
            search: ''
        }
    })

    const handleSubmit = form.handleSubmit((e) => {
        if (e.search.match(matchLink)) {
            window.location.href = e.search
            return
        }
        const splitMessage = e.search.split(':')
        const searchEngine = splitMessage[0]
        const message = splitMessage[1]
        switch (searchEngine.toLowerCase()) {
            case 'я':
            case 'z':
                window.location.href = params.setParams('https://yandex.ru/search/', {text: message})
                break
            case 'g':
                window.location.href = params.setParams('https://www.google.ru/search', {q: message})
                break
            default:
                if (splitMessage.length === 1)
                    window.location.href = params.setParams('https://yandex.ru/search/', {text: searchEngine})
                break
        }
    })

    return {
        form,
        handleSubmit
    }
}
