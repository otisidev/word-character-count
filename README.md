Word and character count from html5 string.

## Why this package?

Word and character count is a **promise** based function.

## Installing

**using npm**

`npm install word-character-count`

**using yarn**
`yarn add word-character-count`

## Usage

```javascript
const wordCount = require("word-character-count");

const result = await wordCount.WordCount("<p>This endpoint works!</p>");
```

## Return object

It returns **JSON** object as promise.

example:

```javascript
result = {
	CharacterCount: 20,
	WordCount: 3
};
```

where
WordCount and CharacterCount are both number dataType.
