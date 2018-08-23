export function UCFirst(text: string): string {
    let splited: Array<string> = text.trim().toLowerCase().split(' ');
    let newText: string;

    splited.forEach((item: string): void => {
        newText += ' ' + item.substr(0, 1).toUpperCase() + item.substr(1);
    });

    return newText.trim();
};
