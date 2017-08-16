import { IDropdownItem } from './dropdown-item';

export interface IDropdownData {
    optgroup: any;
    options: IDropdownItem[];
}

export interface IOptGroup {
    text: string;
    priority: number;
}

export class DropdownData implements IDropdownData {
    public optgroup: IOptGroup;
    public options: IDropdownItem[];

    public constructor(optgroup: IOptGroup, options: IDropdownItem[]) {
        this.optgroup = optgroup;
        this.options = options;
    }
}

export class OptGroup implements IOptGroup {
    public text: string;
    public priority: number;

    public constructor(text: string, priority: number) {
        this.text = text;
        this.priority = priority;
    }
}