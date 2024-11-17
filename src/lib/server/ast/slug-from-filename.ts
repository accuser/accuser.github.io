const slugFromFilename: (filename: { toString: () => string }) => string = (filename) =>
	filename.toString().replace(/(?:\/?index)?\.md$/, '');

export { slugFromFilename as default };
