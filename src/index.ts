const root = document.querySelector(':root') as HTMLElement;

export const setMedia = (media: string, value: boolean = false): void => {
    if (value) {
        root.setAttribute(`data-managed-media-${media}`, '');
    } else {
        root.removeAttribute(`data-managed-media-${media}`);
    }
};
