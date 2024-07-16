import {useForm} from "react-hook-form";
import {Params} from "@/shared/utils/params";

export const useSearch = () => {
    const params = new Params<{ text?: string, q?: string }>()
    const form = useForm({
        defaultValues: {
            search: ''
        }
    })

    const handleSubmit = form.handleSubmit((e) => {
        const splitMessage = e.search.split(':')
        const searchEngine = splitMessage[0]
        const message = splitMessage[1]
        switch (searchEngine.toLowerCase()) {
            case 'я':
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