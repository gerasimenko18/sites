<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Тренировка jQuery</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="main.css">
</head>
<body>

	<!-- Кнопка, открывающая pop-up -->
    <button class="btn btn-primary btn-lg" data-parent="Кнопка в первом экране" data-toggle="modal" data-target="#myModal">Я открываю попап</button>
    <button class="btn btn-primary btn-lg" data-parent="Кнопка в третьем экране" data-toggle="modal" data-target="#myModal">Я открываю попап</button>
    
    <!-- Основная форма с полями разного типа -->
	<form action="mail.php" class="js-form" id="popupResult">
        <input type="text" name="name" required placeholder="Введите имя"  class="form-control form__field">
        <input type="text" name="email" required placeholder="Введите E-mail"  class="form-control form__field">
        <input type="text" name="tel" required placeholder="Введите телефон"  class="form-control form__field">

        <!-- Чекбоксы и радио-кнопки используются редко -->
        <label for="first">Первое значение</label>
        <input type="checkbox" id="first" name="checkBox" value="Первое значение"><br>
        <label for="second">Второе значение</label>
        <input type="checkbox" id="second" name="checkBox" value="Второе значение"><br>
        
        <label for="radio1">Радио 1</label>
        <input type="radio" id="radio1" name="radio" value="Первое радио"><br>
        <label for="radio2">Радио 2</label>
        <input type="radio" id="radio2" name="radio" value="Второе радио"><br>
        <label for="radio3">Радио 3</label>
        <input type="radio" id="radio3"  name="radio" value="Третье радио"><br>
        
        <button class="btn__red__bottom act font-bold" data-submit>Принять участие в Марафоне!</button>

     	<p class="light f13px light f13px">Ваши данные под защитой. Телефон необходим лишь для SMS-уведомления о начале мастер-классов</p>
    </form>
    
    <!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
	      </div>
	      <div class="modal-body">
	        <form action="#" id="goToNewPage">
				<input type="text" name="target">
				<input type="text" name="name" placeholder="Имя">
				<button type="submit">Отправить</button>
	        </form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save changes</button>
	      </div>
	    </div>
	  </div>
	</div>
	
	<!-- Сообщение "спасибо" после отправки формы -->
	<div id="message-for-user">
		<div id="thx">
			Спасибо! Мы обязательно вам перезвоним
		</div>
   	</div>

	
	<script src="https://code.jquery.com/jquery-latest.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<!-- Валидатор для проверки формы на заполненность  -->
	<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js"></script>
	<script src="main.js"></script>
</body>
</html>