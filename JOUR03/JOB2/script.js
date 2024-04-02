$('#mixe').click(function() {
    var images = $('#image-container img').toArray().sort(function() { return 0.5 - Math.random() });

    $('#image-container').html(images);
});

$("#image-container").sortable({
            });


            
