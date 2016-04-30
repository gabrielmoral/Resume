function load() {

    $.get('http://gabrielmoral.github.io/Resume/data.json', function (data) {
        $.get('http://gabrielmoral.github.io/Resume/resumeTemplate.html', function (resumeTemplate) {

            var resumeData = JSON.parse(data);

            var rendered = Mustache.render(resumeTemplate, resumeData);
            $('#target').html(rendered);
        });
    });
}