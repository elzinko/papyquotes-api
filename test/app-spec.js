var expect = require('chai').expect;
var sinon = require('sinon');

describe('app', function() {
    var app;
    beforeEach(function() {
        app = require('../main/app');
    });

    describe('start', function() {

        it('expect start app', function() {
            app.listen = sinon.spy();
            app.start();
            expect(app.listen.calledWith(8085)).to.be.true;
        });

        it('expect return a qote', function() {
            app.get = sinon.spy();
            app.start();
            expect(app.get.calledWith('/quote', app.__getQuote)).to.be.true;
        });
    });

    describe('__getQuote', function() {
        it('expect return quote', function() {
            var quote = { quote: "J'encule le peuple, et il me le rend bien." };
            var request = {};
            var response = {
                send: sinon.spy()
            };

            app.__getFact(request, response);
            expect(response.send.calledWith(quote)).to.be.true;
        });
    });

    describe('__getQuotes', function() {
        it('expect return quotes', function() {

            var quotes = [
                { quote: "Mais, qu'est-ce-que je fais là ?<br /> Je me fous de l\'argent et des femmes." },
                { quote: "J'encule le peuple, et il me le rend bien." }
            ];

            var request = {};
            var response = {
                send: sinon.spy()
            };

            app.__getQuotes(request, response);
            expect(response.send.calledWith(quotes)).to.be.true;
        });
    });

});