$(document).ready(function() {
    $('form:not(form#search)').each(function() {
        $(this).validate({
            submitHandler: function(form) {
                var clikedForm = $(form);
                var fID = "#" + clikedForm.attr('id');
                console.log(fID);
                if(fID=="#subscribe"){
                   var jData = {"email":jQuery("#fdata").val(),"subsType":101}
                }
                $.ajax(console.log(jQuery("#fdata").val()), {
                    url: "http://159.122.169.245:5000/api/v1/subscription?apiKey=sLLf33UNNgBRBqmOsXBVgBtubT1ynREKdHWH7OYiOxmo6zFkvMbEVlLmbaMwI6wR",
                    type: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    data: JSON.stringify(jData),
                    success: function (response) {
                        console.log(response);
                        if(response["result"]=="OK"){
                            console.log("OK");
                            $("#no").text("Thank you for subscribing").css("color","white");


                        }else{
                            console.log("Invalid");
                            $("#no").text(response["result"]).css("color","red");
                        }
                    }
                });
            },
            rules: {
                field: {
                    required: true,
                    email: true
                }
            }
        });
    });
});
