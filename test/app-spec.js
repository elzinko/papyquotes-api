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

        it('expect return a fact', function() {
            app.get = sinon.spy();

            app.start();

            expect(app.get.calledWith('/fact', app.__getFact)).to.be.true;
        });
    });

    describe('__getFact', function() {
        it('expect return fact', function() {
            var fact = { quote: "J'encule le peuple, et il me le rend bien." };
            var request = {};
            var response = {
                send: sinon.spy()
            };

            app.__getFact(request, response);

            expect(response.send.calledWith(fact)).to.be.true;
        });
    });

});