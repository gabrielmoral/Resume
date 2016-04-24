function load() {

    $.get('data.json', function (data) {
        $.get('resumeTemplate.html', function (resumeTemplate) {

            var resumeData = JSON.parse(data);

            var rendered = Mustache.render(resumeTemplate, resumeData);
            $('#target').html(rendered);
        });
    });
}