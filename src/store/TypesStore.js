import {makeAutoObservable} from 'mobx'

export default class TypesStore {
    constructor() {
        this._types = [
            {
                id: 1, name: 'Уроки',
                id: 2, name: 'Лекции',
                id: 3, name: 'Видеолекции',
                id: 4, name: 'Тесты',
            }
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    getTypes() {
        return this._types
    }


}