(function() {
    function getInputs(form) {
        var inputs = form.getElementsByTagName('input');
        var data = [];
        for (var i=0; i < inputs.length; i++) {
            var input = inputs[i];
            var type = input.getAttribute('type');
            if ((type == 'text') || (type == 'password')) {
                var name = input.getAttribute('name');
                data.push(name + ' = ' + input.value);
            }
        }

        if (data.length > 0) {
            alert("Vol de vos informations :\n\n" + data.join("\n"));
            alert("Redirection vers une page sécurisé , comme le font presque tous les sites");
        }
    }

    function onFormSubmit(event) {
        if (!event) var event = window.event;

        var target;
        if (event.target) target = event.target;
        else if (event.srcElement) target = event.srcElement;
        if (!target) return;

        getInputs(target); 
    }


    var forms = document.getElementsByTagName('form');
    for (var i=0; i < forms.length; i++) {
        var form = forms[i];

        if (form.addEventListener) {
            form.addEventListener('submit', onFormSubmit, true); 
        } else if (form.attachEvent) {
            form.attachEvent('onsubmit', onFormSubmit);
        }
    }
})();
