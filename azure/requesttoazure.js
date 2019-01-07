$(document).ready(
    function(){
        $('.button').click(
            function(){
                $.ajax({
                    url: 'http://localhost:7071/api/Function', //'https://ik-azuretest.azurewebsites.net/api/Function',
                    type: 'POST',
                    data: JSON.stringify(
                        { 
                            'Name': 'Azure' 
                        }),
                    beforeSend: function(request)
                    {
                        request.setRequestHeader('Content-Type', 'application/json');
                    },
                    success: function(data)
                    {
                        alert(JSON.stringify(data));
                    }
                });
            }
        )
    }
)