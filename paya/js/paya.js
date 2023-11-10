/*!
 *
 * Some custom features we can eventually bake into a different .js file if need be
 *
 *
 */

function changePaymentMethod(method) {
  if (method == "card") {
    $('#card-payment').addClass('show');
    $('#bank-account').removeClass('show');
    $('#card-payment').addClass('active');
    $('#bank-account').removeClass('active');
    $('#card-payment').fadeToggle('slow');
  }
  else {
    $('#bank-account').addClass('show');
    $('#card-payment').removeClass('show');
    $('#bank-account').addClass('active');
    $('#card-payment').removeClass('active');
    $('#bank-account').fadeToggle('slow');
  }
};

$(function () {
    $('#datetimepickerStart').datetimepicker({
      useCurrent: true,
      format: 'L',
      sideBySide: true,
      debug: false,
      locale: 'en-gb',
      ignoreReadonly: true,
      allowInputToggle: true
    });

    $('#datetimepickerEnd').datetimepicker({
        useCurrent: false,
        sideBySide: false,
        locale: 'en-gb',
        ignoreReadonly: true,
        allowInputToggle: true,
        debug: false
    });
    $("#datetimepickerStart").on("change.datetimepicker", function (e) {
        $('#datetimepickerEnd').datetimepicker('minDate', e.date);
    });
    $("#datetimepickerEnd").on("change.datetimepicker", function (e) {
        $('#datetimepickerStart').datetimepicker('maxDate', e.date);
    });
});
$(function () {
    $('#datetimepickerStartACH').datetimepicker({
      useCurrent: true,
      format: 'L',
      sideBySide: true,
      debug: false,
      locale: 'en-gb',
      ignoreReadonly: true,
      allowInputToggle: true
    });

    $('#datetimepickerEndACH').datetimepicker({
        useCurrent: false,
        sideBySide: false,
        locale: 'en-gb',
        ignoreReadonly: true,
        allowInputToggle: true,
        debug: false
    });
    $("#datetimepickerStartACH").on("change.datetimepicker", function (e) {
        $('#datetimepickerEndACH').datetimepicker('minDate', e.date);
    });
    $("#datetimepickerEndACH").on("change.datetimepicker", function (e) {
        $('#datetimepickerStartACH').datetimepicker('maxDate', e.date);
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// Dot navigation

[].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
  new DotNav( nav, {
    callback : function( idx ) {
      //console.log( idx )
    }
  } );
} );

// Enrollment Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// ACH Carousel feature
$('.carousel').carousel({
  interval: false,
  wrap: false
});

// File Upload
function readUrl(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;
      let imgName = input.files[0].name;
      input.setAttribute("data-title", imgName);
      console.log(e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

// Show & Hide Password

var inputPw = document.getElementById('paya-pwt'),
   icon = document.getElementById('icon');
   icon.onclick = function () {
     if(inputPw.className == 'active form-control input') {
        inputPw.setAttribute('type', 'text');
        icon.className = 'far fa-eye';
        inputPw.className = 'form-control input';
     } else {
        inputPw.setAttribute('type', 'password');
        icon.className = 'far fa-eye-slash';
        inputPw.className = 'active form-control input';
    }
   }
