(function ($)
  { "use strict"

  // validate

    $('button.select-btn').click(function() {
        var parent = $(this).attr('data-parent');
        var modal = $(this).attr('data-target')
        $(modal).find('input[name=target]').val(parent);
    });

  $(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    }),
    $('#search-form').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })

    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Пожалуйста, проверьте ваш ввод."
    );


    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$',
                    digits : true,
                    minlength: 9,
                    maxlength: 14
                },
                name: {
                    required: true,
                    regex : "[A-Za-z]{1,32}"
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Обязательное поле',
                    regex: 'Телефон может содержать только цифры'
                },
                name: {
                    required: 'Обязательное поле',
                    regex: 'Сначала буквы'
                },
                email: {
                    required: 'Обязательное поле',
                    email: 'Неправильный формат почты'
                }
            },

            
            submitHandler: function(form) {
                $('#preloader-active').fadeIn( 3000, function() {
                    $('#preloader-active').fadeOut();
                });
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    
                    case 'form-book_modal':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#message-for-user_modal').fadeIn();
                                    $form.trigger('reset');
                                    
                                }, 1100);
                                $('#message-for-user_modal').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                    case 'form-book':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#message-for-user').fadeIn();
                                    $form.trigger('reset');
                                    
                                }, 1100);
                                $('#message-for-user').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                    case 'search-box':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#message-for-user_box').fadeIn();
                                    $form.trigger('reset');
                                    
                                }, 1100);
                                $('#message-for-user_box').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                }
            return false;
            }
            
        })
    }

    
    $('.js-form').each(function() {
        valEl($(this));
    });
  
});


  

})(jQuery);
