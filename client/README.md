# React Star Wars Quotes

## v.1
* Start with `create-react-app`
* Take the layout from the [`react-star-wars-quotes-starter`](https://github.com/cit31300/react-star-wars-quotes-starter) project and break it into React components
* Components needed:
    * Character
    * Quote

### Steps
* Add Bootstrap to `public/index.html`
* Remove webvitals stuff from `src/index.js`
* Remove content from `src/App.js`
* `mkdir src/components`
* `mkdir src/components/Character src/components/Quote`
* `touch src/components/Character/Character.js src/components/Quote/Quote.js`
* `touch jsconfig.json` (Add contents from another project.)
* Add contents to `jsconfig.json`
* Add contents to `Quote.js`
* Add contents to `Character.js`

## v.2
* Add quote data to `src/index.js`
* Pass data as a prop to `src/App.js`
* In `src/App.js` map over data to create a list of Characters
    * Create a Character instance for each Character in the data
    * Pass the character's name and list of quotes to the Character instance as a prop
* In `src/Character/Character.js`, read the name and list of quotes from props
* Map over list of quotes to create a list of Quotes
    * Create a Quote instance for each Quote in the data
    * Pass the quoteText to each Quote instance as a prop
    * Write out the name of the character in the return of the Character instance
* In `src/Quote/Quote.js`, read the text of the quote from props
    * Write out the text of the quote in the return of the Quote instance