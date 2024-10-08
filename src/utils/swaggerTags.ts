const registeredTags = new Set();

//reg
export const registerTag = (name: string, description: string) => {
   registeredTags.add(JSON.stringify({ name, description }));
};
//LF
export const getRegisteredTags = () => {
   return Array.from(registeredTags).map((tag: any) => JSON.parse(tag));
};