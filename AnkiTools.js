class Card {
    constructor(front, back) {
        this.front = front;
        this.back = back;
    }
}

class Deck {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }

    genCSV() {
        // Serialize data into a single string representing a CSV file
        let cardStrings = this.cards.map((card, index, array) => {
            let cardArray = [card.front, card.back];

            // Convert each side of each card into a string
            let sideStrings = cardArray.map((side) => {
                let tmpString = side;

                // Handle quotations on the card by replacing with double quotations
                if(tmpString.includes('"'))  {
                    tmpString = tmpString.replaceAll('"', '""');
                }

                // Handle commas on the card by putting single quotations around the entire string
                if(tmpString.includes(",")) {
                    tmpString = '"' + tmpString + '"';
                }

                return tmpString;
            });

            // Combine sideStrings into a card string
            return sideStrings.join();
        });

        // Combine each card string into a single string with \n as the separator
        let CSVstring = cardStrings.join('\n');

        // For now, just return the CSV string
        return CSVstring;
    }
}

