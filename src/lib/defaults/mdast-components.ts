import Blockquote from '$lib/components/Mdast/Blockquote.svelte';
import Break from '$lib/components/Mdast/Break.svelte';
import Code from '$lib/components/Mdast/Code.svelte';
import ContainerDirective from '$lib/components/Mdast/ContainerDirective.svelte';
import Definition from '$lib/components/Mdast/Definition.svelte';
import Delete from '$lib/components/Mdast/Delete.svelte';
import Emphasis from '$lib/components/Mdast/Emphasis.svelte';
import FootnoteDefinition from '$lib/components/Mdast/FootnoteDefinition.svelte';
import FootnoteReference from '$lib/components/Mdast/FootnoteReference.svelte';
import Heading from '$lib/components/Mdast/Heading.svelte';
import Html from '$lib/components/Mdast/Html.svelte';
import Image from '$lib/components/Mdast/Image.svelte';
import ImageReference from '$lib/components/Mdast/ImageReference.svelte';
import InlineCode from '$lib/components/Mdast/InlineCode.svelte';
import InlineMath from '$lib/components/Mdast/InlineMath.svelte';
import LeafDirective from '$lib/components/Mdast/LeafDirective.svelte';
import Link from '$lib/components/Mdast/Link.svelte';
import LinkReference from '$lib/components/Mdast/LinkReference.svelte';
import List from '$lib/components/Mdast/List.svelte';
import ListItem from '$lib/components/Mdast/ListItem.svelte';
import Math from '$lib/components/Mdast/Math.svelte';
import Paragraph from '$lib/components/Mdast/Paragraph.svelte';
import Root from '$lib/components/Mdast/Root.svelte';
import Strong from '$lib/components/Mdast/Strong.svelte';
import Table from '$lib/components/Mdast/Table.svelte';
import TableCell from '$lib/components/Mdast/TableCell.svelte';
import TableRow from '$lib/components/Mdast/TableRow.svelte';
import Text from '$lib/components/Mdast/Text.svelte';
import TextDirective from '$lib/components/Mdast/TextDirective.svelte';
import ThematicBreak from '$lib/components/Mdast/ThematicBreak.svelte';
import Yaml from '$lib/components/Mdast/Yaml.svelte';
import type { Components } from '$lib/types/components';

const mdastComponents: Components<import('mdast').Nodes> = {
	blockquote: Blockquote,
	break: Break,
	code: Code,
	containerDirective: ContainerDirective,
	definition: Definition,
	delete: Delete,
	emphasis: Emphasis,
	footnoteDefinition: FootnoteDefinition,
	footnoteReference: FootnoteReference,
	heading: Heading,
	html: Html,
	image: Image,
	imageReference: ImageReference,
	inlineCode: InlineCode,
	inlineMath: InlineMath,
	leafDirective: LeafDirective,
	link: Link,
	linkReference: LinkReference,
	list: List,
	listItem: ListItem,
	math: Math,
	paragraph: Paragraph,
	root: Root,
	strong: Strong,
	table: Table,
	tableCell: TableCell,
	tableRow: TableRow,
	text: Text,
	textDirective: TextDirective,
	thematicBreak: ThematicBreak,
	yaml: Yaml
};

export { mdastComponents };
