export const setCookie = ({ name, value }: { name: string; value: string }) => {
    document.cookie = `${name}=${value}`;
};
