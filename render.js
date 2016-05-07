function load() {

    $.getJSON('data.json', function (resumeData) {
        $.get('resumeTemplate.html', function (resumeTemplate) {

            var rendered = Mustache.render(resumeTemplate, resumeData);
            $('#target').html(rendered);
        });
    });
}