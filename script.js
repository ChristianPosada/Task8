

jQuery(document).ready(function(){
    var url = 'https://jsonplaceholder.typicode.com/photos';

    $('#button').on('click',function(){

        axios.get(url).then(function(response){
            console.log(response);
            
            
    let title = response.data.map((album) => {
        return album.title;
    });



    let imgUrls = response.data.map((album) =>{
        return album.url;
    });


    for (var i=0;i < title.length;i++){
    $('#tasks').append('<img src="'  + imgUrls[i] + '"alt="' + title[i] + '">');
    console.log(imgUrls[i]);
    $('#tasks').append('<p>' + title[i] + '</p>');
    }        

});

});
});