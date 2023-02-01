

function previewFile(input) {
    var file = $("#image_upload").get(0).files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function () {
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
        success: function (data) {
            let res = JSON.parse(data);
            $('#featured_image').val(res.image);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus + " " + errorThrown);
        }
    });
}


function swal_alert(type, title, text = "") {
    swal.fire({
        title: title,
        text: text,
        icon: type,
        timer: 3000,
        showConfirmButton: false,
        // buttons: false
    });
}

function noty_alert(type, text) {
    new Noty({
        text: text,
        type: type
    }).show();
}


function token_config(method, api_url, data) {
    let config = {
        method: method,
        url: api_url,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }
    return config;
}


