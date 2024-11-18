const slugFromSource = (source: string) => source.replace(/(?:\/index)?\.md$/g, '');

export { slugFromSource as default };
