function load() {

    $.get('http://gabrielmoral.github.io/Resume/data.json', function (resumeData) {
        $.get('http://gabrielmoral.github.io/Resume/resumeTemplate.html', function (resumeTemplate) {

            var rendered = Mustache.render(resumeTemplate, resumeData);
            $('#target').html(rendered);
        });
    });
}