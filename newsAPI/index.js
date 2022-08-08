//lifes better when you are a chahce 

console.log('Chache');



const loadNews = function () {


    let evandaEle = document.createElement("img");
    let evanda = evandaEle.src = "https://media-exp1.licdn.com/dms/image/C4E03AQGYPrzw0KM7Yg/profile-displayphoto-shrink_800_800/0/1645675253314?e=1665619200&v=beta&t=3X71t7drim_5Jcq4vLL4QJo8XQj63xlps9e51wwKbME";

    let searchBar = document.getElementById('inputBar');
    let searchValue = searchBar.value;
    
    let apiURL= `https://newsapi.org/v2/everything?q=${searchValue}&apikey=abf0116234fe4812a5b1ccd71748148f`
    fetch(apiURL).then((responseObject) => {

        console.log('Response From Server', responseObject);

        responseObject.json().then((responseObjectAsJson) => {
            console.log('Response From Server Converted To JSON', responseObjectAsJson);


            const news = responseObjectAsJson.articles;

           let html = '';

           for (let i = 0; i < news.length; i++) {


            if(news[i].source.name == 'The Hill' || news[i].source.name == 'Fox News')
            {
                html += `
            <tr>
                <td>${news[i].title} </td>
                <td>${news[i].author}</td>
                <td><img src=${evanda} /></td>
                <td>❌ Fake News ❌</td>
                <td> ⚠️YES Trigger Warning⚠️</td>
            </tr>
        `;
            }

            else if(news[i].content == 'Trump' ||news[i].content == 'Republican' )
            {
                html += `
            <tr>
                <td>${news[i].title} </td>
                <td>${news[i].author}</td>
                <td><img src=${evanda} /></td>
                <td>✅ Real News ✅</td>
                <td> ⚠️YES Trigger Warning</td⚠️>
            </tr>
        `;
            } 

            else {

            
            html += `
            <tr>
                <td>${news[i].title}</td>
                <td>${news[i].author}</td>
                <td><img src=${evanda} /></td>
                <td>✅ Real News ✅</td>
                <td>No Trigger Warning</td>
            </tr>
        `;
    }
        }
        document.getElementById('newsResults').innerHTML = html;

    

    });
});

};