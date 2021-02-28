// word
/**
 * Funtion that gets word and character count from html5 string
 * @param {string} htmlString html5 string
 */
exports.WordCount = htmlString => {
	// validation
	if (typeof htmlString !== "string" || htmlString === "") {
		return {
			CharacterCount: 0,
			WordCount: 0,
			words: ""
		};
	}
	// remove html whitespace unicode
	htmlString = htmlString.replace("&nbsp;", " ");

	// remove start and end whitespace
	htmlString = htmlString.replace(/(^\s*)|(\s*$)/gi, "");

	// remove multiple whitespace with one
	htmlString = htmlString.replace(/[ ]{2,}/gi, "");

	// remove newline with start whitespace
	htmlString = htmlString.replace(/\n /, "\n");
	// remove &gt; and &lt;
	htmlString = htmlString.replace("&lt;", "").replace("&gt;", "");

	// remove all html tag
	htmlString = htmlString.replace(/(<([^>]+)>)/gi, "");

	// filter word
	let character = 0;
	const length = htmlString.split(" ").filter(word => {
		character += word.length;
		return word !== "";
	}).length;

	return {
		WordCount: length,
		CharacterCount: character,
		words: htmlString
	};
};
