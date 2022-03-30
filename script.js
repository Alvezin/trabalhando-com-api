const form = document.getElementById('form')
const email = document.getElementById('nome')
const senha = document.getElementById('funcao')

const desaparecer = () => {
    setTimeout(() => {
        document.getElementById('boxModal').classList.remove('active')
    }, 5000)
}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let dados = {
        email: email.value,
        password: senha.value
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
    .then( response => {response.json().then(data => {
        if (data.id){
            document.getElementById('boxModal').classList.add('active')
            desaparecer()
            
        }
    })
    })
   
            
})