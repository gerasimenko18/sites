let metodsObj = {}; // Пустой обьект где будут храниться все методы
let GlobalObj = {}; // Пустой обьект где будут храниться вообще все

const metodsArr = [ // Масив мотодов
	"Горячий кератин",			// 0
	"Плетение кос",				// 1
	"Плетение микроколец",		// 2
	"Микро пряди (пряди)",		// 3
	"Рубер",					// 4
	"Двусторонний клей",		// 5
	"Консультации с мастером",	// 6
]

// Функция - конструктор создает новый обьект метода, в нем будем хранить счетчик
function Metod(name) {
	this.name = name;
	this.count = 0;
	this.addCount = function(n) { // Метод обьекта, увеличивает счетк на n
		this.count += +n;
	}
	this.removeCount = function (n) {
		this.count -= +n;
	}
}

// Наполняем metodsObj обьектами методов
metodsArr.forEach((metod, index) => {
	metodsObj[index] = new Metod(metod);
})

GlobalObj.metods = metodsObj;

// Функция ищет у кого больше
GlobalObj.searchWinners = function () {
	// 1. Делаем из обьекта масив
	// 2. Сортируем по убыванию
	// 3. Режим первых три варианта 
	let arr = [];
	for (let key in this.metods) {
		arr.push(this.metods[key]);
	}
	
	return arr.sort((a, b) => b.count - a.count).slice(0, 3);
}

// Функция вызываеться при каждом ответе, считывает ответ и добавляет в нужный метод балы
GlobalObj.addPoints = function (index) {
	let form = new FormData(mySwiper),
	answer = form.getAll(`q${index}`),
	answerArr = answer.join(', ').split(', ');

	this.lastAddPoints = answerArr;
	
	answerArr.forEach(el => {
		let [id, val] = el.split(':');
		GlobalObj.metods[id].addCount(val);
	})
}
GlobalObj.removeLastPoints = function () {
	this.lastAddPoints.forEach(el => {
		let [id, val] = el.split(':');
		GlobalObj.metods[id].removeCount(val);
	})
}

// Функция выводит результат на экран
const printResult = (arr) => {
	listResults.innerHTML = '';
	arr.forEach(el => {
		let li = document.createElement('li');
		li.innerHTML = el.name + ' (' + el.count + ')';

		listResults.append(li);
	});
}


var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
  	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	on: {
		slideNextTransitionStart: (swiper) => {
			if (swiper.slides[swiper.activeIndex].classList.contains('form-slide')) {
				// Отключть переход к следующему слайду
				// Считать победителей в конце
				// Добавить Превью загруженой картинки
				// На странице результата выводить имя
				// Отправить админу на почту ответы на вопросы, 3 результата, данные формы
			}
			if (swiper.slides[swiper.activeIndex].classList.contains('question-slide')) {
				GlobalObj.addPoints(swiper.activeIndex - 1);
			}
			if (swiper.isEnd) {
				printResult(GlobalObj.searchWinners());
			}
		},
		slidePrevTransitionStart: (swiper) => {
			GlobalObj.removeLastPoints(swiper.activeIndex - 1);
			console.log(GlobalObj.metods[0]);
		}

	}

	
});



// swiper.slideTo(10, 500)