# Product Name

Simple sentiment analysis using multiple Node.js packages

## Installation

1. Clone the repository: `git clone https://github.com/balain/survey-sentiment.git`

2. Install required Node packages: `npm install`

## Required Packages

- [vaderSentiment-js](https://github.com/vaderSentiment/vaderSentiment-js): "Javascript port of the [VADER sentiment analysis tool](https://github.com/cjhutto/vaderSentiment)"
- [sentiment](https://github.com/thisandagain/sentiment): "AFINN-based sentiment analysis for Node.js"
- [natural](https://github.com/NaturalNode/natural): "...general natural language facility for nodejs..."
- [xlsx](https://sheetjs.com/opensource): to parse the Excel file

## Usage example

`node process.js excelfilename` where *excelfilename* is the name of the XLS file to process.

## Constraints

- The source file:
  
  - Must have at least one worksheet.
  
  - The first worksheet must have three columns:
    
    - Column *A* is ignored.
    
    - Column *B* contains the survey question.
    
    - Column *C* contains the survey responses (free text). 

- Only the first worksheet/tab of the source XLS file will be processed.

- Only the third column of that tab will be analyzed.

## Process and Output

- The processing script will:
  
  - Read in column *C*, 
  
  - Analyze it using multiple Node packages, and 
  
  - Output the tab-delimited results to STDOUT.

- The user must save/redirect that output to a CSV file for further manipulation (e.g. import to Excel).

### Output Contents

- In addition to columns *B* and *C* from the original Excel file, the output contains the following columns: 
  
  - _Score_: sentiment score
  - _Comparative_: sentiment comparative value
  - _Pos Terms_: sentiment's list of positive words in the string
  - _Neg Terms_: sentiment's list of negative words in the string
  - _Vader Pos_: Vader's list of positive words in the string
  - _Vader Neutral_: Vader's list of neutral words in the string
  - _Vader Neg_: Vader's list of negative words in the string
  - _Vader Compound_: Vader's list of positive words in the string
  - _Natural Sentiment_: natural's list of sentiment analysis

## License

The MIT License (MIT)

Copyright (c) 2020 John D. Lewis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

1. Fork it (<https://github.com/balain/survey-sentiment/fork>)
2. Create your feature branch (`git checkout -b feature/abc`)
3. Commit your changes (`git commit -am 'Add some abc'`)
4. Push to the branch (`git push origin feature/abc`)
5. Create a new Pull Request
