function ElMapper() {
  var Mapper = this;
  Mapper.prmBtn = $("#primary-menu-btn");
  Mapper.hdnMenu = $(".hidden-menu");
  Mapper.closeBtn = $('#close-menu-btn');
  Mapper.nav = $('.nav-links');

}
function HiddenNShowController() {
    var Cont = this;
    Cont.Mapper = new ElMapper();

    Cont.hideMenuAndCloseBtn = function (callback) {
      Cont.Mapper.prmBtn.off().removeClass('hidden');
      Cont.Mapper.hdnMenu.addClass('hidden');
      Cont.Mapper.closeBtn.addClass('hidden');
      callback();
    }

    Cont.showMenuAndCloseBtn = function (callback) {

      Cont.Mapper.prmBtn.addClass('hidden');
      Cont.Mapper.hdnMenu.removeClass('hidden');
      Cont.Mapper.closeBtn.off().removeClass('hidden');
      callback();
    }
}

function EventBinder() {

  var Binder = this,
      HnSCont = new HiddenNShowController();
  Binder.mapper = new ElMapper();

  Binder.offEverything = function () {
    Binder.mapper.prmBtn.off();
    Binder.mapper.closeBtn.off();
  }

  Binder.bindNavLinks = function () {
    Binder.mapper.nav.each(function () {
      $(this).click(function () {
        HnSCont.hideMenuAndCloseBtn(Binder.bindPrmClick);
      });
    });
  }

  Binder.bindPrmClick = function () {
    $(this).off();
    Binder.mapper.prmBtn.click(function () {
      HnSCont.showMenuAndCloseBtn(Binder.bindCloseClick);
    });

  }
  Binder.bindCloseClick = function () {
    $(this).off();
    Binder.mapper.closeBtn.click(function () {
      HnSCont.hideMenuAndCloseBtn(Binder.bindPrmClick);
    });

  }

  Binder.bind = function () {
    Binder.bindPrmClick();
    Binder.bindNavLinks();
  }

}

$(document).ready(function(){

  var Binder = new EventBinder();

  Binder.bind();


});
