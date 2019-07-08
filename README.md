[![Build Status](https://travis-ci.org/nathan7/microdata.png?branch=master)](https://travis-ci.org/nathan7/microdata)
# microdata

  a module for extracting HTML5 microdata in the browser

## Compatibility

  microdata uses [component-query](https://www.npmjs.com/package/component-query), a wrapper for selector engines.
  If you don't plug a selector engine into it, it'll default to querySelector/querySelectorAll.
  See the [caniuse page for querySelector/querySelectorAll](http://caniuse.com/#feat=queryselector) for more information.

## Installation

    $ npm install --save microdata

## API

### microdata(schema, elem)
find all the elements with the given itemtype, extracts their data and returns them in an array.
if elem is given, it only looks within that element. 

The protocol can be left off of the itemtype, allowing the search whether http or https is used.

example:
```javascript
microdata('://data-vocabulary.org/Person')
```
example return value:
```javascript
[{ 
  "_type": "http://data-vocabulary.org/Person",
  "photo": "http://diveintohtml5.info/examples/2000_05_mark.jpg",
  "name": "Mark Pilgrim",
  "title": "Developer advocate",
  "affiliation": "Google, Inc.",
  "address": {             
    "_type": "http://data-vocabulary.org/Address",
    "street-address": "100 Main Street",
    "locality": "Anytown", 
    "region": "PA",        
    "postal-code": "19999",
    "country-name": "USA"
  },            
  "url": ["http://diveintomark.org/", "http://www.google.com/profiles/pilgrim", "http://www.reddit.com/user/MarkPilgrim", "http://www.twitter.com/diveintomark"]
}]
```

### microdata.extract(elem)
extract all the microdata from an element. if multiple values are found for a property, it's turned into an array.

## License

  MIT
