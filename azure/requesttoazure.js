$(document).ready(
    function(){
        $('.button').click(
            function(){
                $.ajax({
                    url: 'https://ik-azuretest.azurewebsites.net/api/Function',
                    type: 'POST',
                    data: JSON.stringify(
                        { 
                            'Name': 'some name' 
                        }),
                    beforeSend: function(request)
                    {
                        request.setRequestHeader('Content-Type', 'application/json');
                    },
                    success: function(data)
                    {
                        $('.data-wrapper').show(500);
                        $('.data').html('Const: ' + JSON.stringify(data));
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $('.data-wrapper').hide(500);
                    }
                });
            }
        )

        $('.button_random').click(
            function(){
                $.ajax({
                    url: 'https://ik-azuretest.azurewebsites.net/api/Function',
                    type: 'POST',
                    data: JSON.stringify(
                        { 
                            'Name': '' 
                        }),
                    beforeSend: function(request)
                    {
                        request.setRequestHeader('Content-Type', 'application/json');
                    },
                    success: function(data)
                    {
                        $('.data-wrapper').show(500);
                        $('.data').html('Random: ' + JSON.stringify(data));
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $('.data-wrapper').hide(500);
                    }
                });
            }
        )
    }
)