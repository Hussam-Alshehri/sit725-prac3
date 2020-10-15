$(document).ready(function(){
    setInterval(()=>{
          $.get('/random',(data)=>{
          $('#randomNumber').html(data.random);
            })
        },1000) 
    
      
        $('#btnWeather').click(function(){
            let num1=$('#number1').val();
            let num2=$('#number2').val();
            let data ={ num1,num2 }
    
            $.get( "/adder",data, function( result )
             {
                $('#result').val(result.result);
              });
    
        })
    
    })