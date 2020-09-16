'use strict';

(function () {

  var cropElement = document.querySelectorAll('.about__crop-text');
  var  size = 200;
  var  endCharacter = '..';

  cropElement.forEach(el => {
      let text = el.innerHTML;

      if ((el.innerHTML.length > size) && (window.innerWidth < 1024)) {
          text = text.substr(0, size);
          el.innerHTML = text + endCharacter;
      }
  });
}());

(function () {
  var elements = document.querySelectorAll('#tel');
  for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '+7(000)0000000',
    });
  }
})();

(function () {
  var tel = document.getElementById('tel');
  var add7ToTel = function(){
    tel.value='+7';
    tel.removeEventListener('focus',add7ToTel);
  };
  tel.addEventListener('focus',add7ToTel);
  })();

(function () {
  var name = document.getElementById ('name');
  var popupGradient = document.querySelector('.popup-gradient');
  var sendButton = document.querySelector ('.questions__submit-agree input[type="submit"]');
  var closeButton = document.querySelector ('.questions__close-button');
  var questions = document.querySelector ('.questions');
  var headerButton = document.querySelector ('.page-header__button');
  var questionsHeader = document.querySelector ('.questions__form h3');
  var questionsText = document.querySelector ('.questions__form p');
  var questionsSubmit = document.querySelector ('.questions__submit-agree input[type="submit"]');

  var changeText = function () {
    questionsHeader.innerText = 'Закажите звонок';
    questionsText.innerText = 'Оставьте контакты, мы проконсультируем вас бесплатно в удобное время';
    questionsSubmit.value = 'ОТПРАВИТЬ';
  }

  var returnText = function () {
    questionsHeader.innerText = 'Остались вопросы? Задайте их нам!';
    questionsText.innerText = 'Мы проконсультируем Вас бесплатно';
    questionsSubmit.value = 'Задать вопрос';
  }

  var onShowPopup = function () {
    popupGradient.style.display = 'block';
    questions.classList.add('questions--js');
    changeText();
    closeButton.addEventListener('click', onClosePopup);
    sendButton.addEventListener('submit', onClosePopup);
    popupGradient.addEventListener('click', onClosePopup);
    headerButton.removeEventListener ('click', onShowPopup);
    document.addEventListener('keydown', onCloseEsc);
    yourname.focus();
  }

  var onCloseEsc = function (evtKey) {
    if (evtKey.key === 'Escape') {
      onClosePopup();
    }
  };

  var onClosePopup = function () {
    popupGradient.style.display = 'none';
    questions.classList.remove('questions--js');
    closeButton.removeEventListener('click', onClosePopup);
    sendButton.removeEventListener('submit', onClosePopup);
    headerButton.addEventListener ('click', onShowPopup);
    returnText();
  }

  headerButton.addEventListener ('click', onShowPopup);
})();

(function () {
  function persistInput(input) {
    var key = "input-" + input.id;

    var storedValue = localStorage.getItem(key);

    if (storedValue)
        input.value = storedValue;

    input.addEventListener('input', function ()
    {
        localStorage.setItem(key, input.value);
    });
  }
  persistInput(yourname);
  persistInput(tel);
  persistInput(question);
})();

(function() {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})();
