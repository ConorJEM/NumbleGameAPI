const app = Vue.createApp({
    //data, functions
    //template: '<h2> I am template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        async startGame() {
            data = {
                'gameMode' : document.querySelector('#gameDifficultySelect').value
            }
            console.log(data.gameMode);
            fetch('127.0.0.1:8080/game', method = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log("Error! " + err));
        }
    }
});

app.mount('#app')