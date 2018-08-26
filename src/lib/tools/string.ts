export function UCFirst(text: string): string {
    let splited: Array<string> = text.trim().toLowerCase().split(' ');
    let newText: string = '';

    splited.forEach((item: string): void => {
        newText += ' ' + item.substr(0, 1).toUpperCase() + item.substr(1);
    });

    return newText.trim();
};

export function isString(obj: any): boolean {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if (typeof obj[i] !== 'string') return false;
        }
    } else {
        if (typeof obj !== 'string') return false;
    }

    return true;
}
