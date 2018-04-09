$(document).ready(function() {
    $('form:not(form#search)').each(function() {
        $(this).validate({
            submitHandler: function(form) {
                var clikedForm = $(form);
                var fID = "#" + clikedForm.attr('id');

                if(fID=="#subscribe"){
                   var jData = {"email":jQuery("#fdata").val(),"subsType":303}
                }
                $.ajax({
                    url: "http://159.122.169.245:5000/api/v1/subscription?apiKey=sLLf33UNNgBRBqmOsXBVgBtubT1ynREKdHWH7OYiOxmo6zFkvMbEVlLmbaMwI6wR",
                    type: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    data: JSON.stringify(jData),
                    success: function (response) {

                        if(response["result"]=="OK"){
                            $("#no").text(response["msg"]).css("color","white");
                            setTimeout(function() {
                                $('#no').hide();
                            }, 150000);
                            $("#btn-send").css({background: "#2a2d2e", "border-color": "white"});
                            document.getElementById("btn-send").disabled = true;
                          $("#fdata").val("")



                            //$("#no").text(response["msg"]).css("color","white");



                        }else{

                            $("#no").text(response["msg"]).css("color","red");
                        }
                    }
                });
            },errorLabelContainer: "#error",

            rules: {
                field: {
                    required: true,
                    email: true
                }
            }
        });
    });
});
