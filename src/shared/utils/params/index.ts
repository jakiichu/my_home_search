class Params<T> {

    public getAllParams(): T {
        return Object.fromEntries(new URLSearchParams(window.location.search).toString().split('&')
            .map((item: string) => item.split('=')
                .map((item) => item))) as T
    }

    public getParamsOne<K extends keyof T>(item: T[K]): unknown {
        return new URLSearchParams(window.location.search).get(item as string)
    }

    public setParams(url: string, params: T): string {
        return `${url}?${this.createParamsString(params)}`
    }

    public createParamsString(params: T): string {
        return Object.entries(params as {
            [s: string]: unknown
        }).map(key => `${key[0]}=${key[1]}`).join('&')
    }
}


export {Params}
