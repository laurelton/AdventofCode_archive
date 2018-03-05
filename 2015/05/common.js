'use strict';

let fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf-8');
// let potentialNiceStrings = input.split('\r\n');

module.exports = {
    hasThreeVowels: function (word) {
        let letters = word.split('');
        let vowelCount = 0;
        for (let i = 0; i < letters.length; i++) {
            if (this.vowels.indexOf(letters[i]) > -1) {
                vowelCount += 1;
            }

            if (vowelCount == 3) {
                return true;
            }
        }

        return false;
    },

    containsRepeatedCharcters: function (word) {
        let repeatCharacters = false;
        let letters = word.split('');

        for (let i = 0; i < letters.length - 1; i++) {
            if (letters[i] == letters[i + 1]) {
                repeatCharacters = true;
                break;
            }
        }

        return repeatCharacters;
    },

    containsForbiddenStrings: function (word) {
        let forbidden = true;

        return true;
    },

    excludedSubstrings: ['ab', 'cd', 'pq', 'xy'],

    vowels: ['a', 'e', 'i', 'o', 'u'],

    inputStrings: function() {
        return input.split('\r\n');
    }
}
