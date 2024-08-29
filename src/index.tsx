import { connect, type Field, type FieldIntentCtx } from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import ConfigScreen from "./entrypoints/ConfigScreen";
import { render } from "./utils/render";

connect({
	renderConfigScreen(ctx) {
		return render(<ConfigScreen ctx={ctx} />);
	},
	customBlockStylesForStructuredTextField(field: Field, ctx: FieldIntentCtx) {
		return [
			{
				id: "emphasized",
				node: "paragraph",
				label: "Emphasized",
				appliedStyle: {
					fontFamily: "Georgia",
					fontStyle: "italic",
					fontSize: "1.4em",
					lineHeight: "1.2",
				},
			},
		];
	},
	customMarksForStructuredTextField(field: Field, ctx: FieldIntentCtx) {
		return [
			{
				id: "spoiler",
				label: "Spoiler",
				icon: "bomb",
				keyboardShortcut: "mod+shift+l",
				appliedStyle: {
					backgroundColor: "rgba(255, 0, 0, 0.3)",
				},
			},
		];
	},
});
