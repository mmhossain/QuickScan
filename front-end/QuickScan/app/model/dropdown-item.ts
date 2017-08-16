export interface IDropdownItem {
    value: string;
    text: string;
}

export class DropdownItem implements IDropdownItem {
    public value: string;
    public text: string;

    public constructor(value: string, text: string) {
        this.value = value;
        this.text = text;
    }
}