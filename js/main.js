/*global $, console, window, document */
function ElMapper() {
    "use strict";
    var Mapper = this;
    Mapper.prmBtn = $("#primary-menu-btn");
    Mapper.hdnMenu = $(".hidden-menu");
    Mapper.closeBtn = $('#close-menu-btn');
    Mapper.nav = $('.nav-links');
    Mapper.quote = $('#quote');
    Mapper.quoteAuthor = $('#quote-author');
}
function HiddenNShowController() {
    "use strict";
    var Cont = this;
    Cont.Mapper = new ElMapper();

    Cont.hideMenuAndCloseBtn = function (callback) {
        Cont.Mapper.prmBtn.off().removeClass('hidden');
        Cont.Mapper.hdnMenu.addClass('hidden');
        Cont.Mapper.closeBtn.addClass('hidden');
        callback();
    };

    Cont.showMenuAndCloseBtn = function (callback) {

        Cont.Mapper.prmBtn.addClass('hidden');
        Cont.Mapper.hdnMenu.removeClass('hidden');
        Cont.Mapper.closeBtn.off().removeClass('hidden');
        callback();
    };
}

function EventBinder() {
    "use strict";

    var Binder = this,
        HnSCont = new HiddenNShowController();

    Binder.mapper = new ElMapper();

    Binder.offEverything = function () {
        Binder.mapper.prmBtn.off();
        Binder.mapper.closeBtn.off();
    };

    Binder.bindNavLinks = function () {
        Binder.mapper.nav.each(function () {
            $(this).click(function () {
                HnSCont.hideMenuAndCloseBtn(Binder.bindPrmClick);
            });
        });
    };

    Binder.bindPrmClick = function () {
        $(this).off();
        Binder.mapper.prmBtn.click(function () {
            HnSCont.showMenuAndCloseBtn(Binder.bindCloseClick);
        });
    };
    Binder.bindCloseClick = function () {
        $(this).off();
        Binder.mapper.closeBtn.click(function () {
            HnSCont.hideMenuAndCloseBtn(Binder.bindPrmClick);
        });
    };

    Binder.bind = function () {
        Binder.bindPrmClick();
        Binder.bindNavLinks();
    };

}

function QuoteGenerator() {
    "use strict";
    var app = this;

    app.quotesData = [];
    app.mapper = new ElMapper();

    app.init = function () {
        $.when({}).then(app.getQuote).then(app.generate);
    };
    app.generate = function () {
        var position = Math.floor(Math.random() * (app.quotesData.length - 1)),
            quote = app.quotesData[position];

        app.mapper.quote.html(quote.text);
        app.mapper.quoteAuthor.html(quote.author);

    };
    app.getQuote = function () {
        var defer = $.Deferred();
        $.get('quotes.json').then(function (data) {
            console.log(data);
            app.quotesData = data.quotes;
            defer.resolve();
        });
        return defer.promise();
    };

    return app;

}

$(document).ready(function () {
    "use strict";

    var Binder = new EventBinder(),
        QGenerator = new QuoteGenerator();

    Binder.bind();
    QGenerator.init();

});
