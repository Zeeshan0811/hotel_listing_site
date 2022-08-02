// ajax post request
function ajaxPost(url,data) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "html",
        success: function(data) {
            return data;
        },
        error: function() {
            alert('Error occured');
        }
    });
}


function sendFile_summernote(file, editor, welEditable) {
    data = new FormData();
    data.append("file", file);
    data.append("image_type", "summernote");
    data.append("path", "upload/summernote/");
    data.append("reference_id", "");
    $.ajax({
        data: data,
        type: 'POST',
        url: base_url + "file_upload",
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            let res = JSON.parse(data);
            let image_url = site_url + res.path + res.image;
            $('.sumnote_description').summernote("insertImage", image_url);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus + " " + errorThrown);
        }
    });
}

$('.sumnote_description').summernote({
    fontSizes: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '36', '48'],
    toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['style', 'ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert', ['link', 'picture', 'video', 'hr']],
        ['table', ['table']],
        ['misc', ['undo', 'redo']],
        ['codeview', ['codeview', 'fullscreen']]
    ],
    callbacks: {
        onImageUpload: function(files, editor, welEditable) {
            sendFile_summernote(files[0], editor, welEditable);
        }
    }
});

let summernote_placing_data = (content) => {
    $('.sumnote_description').summernote("code", content);
}


function previewFile(input) {
    var file = $("#image_upload").get(0).files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function() {
            $("#previewImg").attr("src", reader.result);
        }

        reader.readAsDataURL(file);
    }

    data = new FormData();
    data.append("file", file);
    data.append("image_type", "blog");
    data.append("path", "upload/images/");
    data.append("reference_id", "");
    $.ajax({
        data: data,
        type: 'POST',
        url: base_url + "file_upload",
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            let res = JSON.parse(data);
            $('#featured_image').val( res.image);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus + " " + errorThrown);
        }
    });
}