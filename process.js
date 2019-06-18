var Sentiment = require('sentiment');
var sentiment = new Sentiment();

const vader = require('vader-sentiment');

const natural = require('natural');
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
var tokenizer = new natural.WordTokenizer();

XLSX = require('xlsx');
var fname = process.argv[2];
var wb = XLSX.readFile(fname);
var ws = wb.Sheets[wb.SheetNames[0]];
var range = XLSX.utils.decode_range(ws['!ref']);

var first_col = range.s.c;
var last_col = range.e.c;

var first_row = range.s.r;
var last_row = range.e.r;

console.log([ws['B1'].v, ws['C1'].v, 'Score', 'Comparative', 'Pos Terms', 'Neg Terms', 'Vader Pos', 'Vader Neutral', 'Vader Neg', 'Vader Compound', 'Natural Sentiment'].join("\t"));

for(rowNum = range.s.r+1; rowNum <= range.e.r; rowNum++){
    row = [];
    var val2 = ws['B'+(rowNum+1)].v;
    var val3 = ws['C'+(rowNum+1)].v;
    // Now analyze with Sentiment
    var sent = sentiment.analyze(val3);
    ws['D'+(rowNum+1)] = sent.score;
    // ...now with vader-sentiment
    const vsent = vader.SentimentIntensityAnalyzer.polarity_scores(val3);
    // ...now with NaturalNode/natural
    const nsent = analyzer.getSentiment(tokenizer.tokenize(val3));
    // ...output results
    console.log([val2, val3, sent.score, sent.comparative, sent.positive, sent.negative, vsent.pos, vsent.neu, vsent.neg, vsent.compound, nsent].join("\t"));
}

