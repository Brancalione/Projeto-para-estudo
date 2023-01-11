function getPageData(dayTrade, pageSize, pageNumber) {
	// Your code goes here
}

var dayTrade = `[
	{"user": "Rob", "company": "Google", "countOfStocks": 5},
	{"user": "Bill", "company": "Goldman", "countOfStocks": 18},
	{"user": "Rob", "company": "JPMorgan", "countOfStocks": 10},
	{"user": "Dave", "company": "Boeing", "countOfStocks": 10}
]`;

console.log(getPageData(dayTrade, 1, 2)); // page size = 1, page number = 2