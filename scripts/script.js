function cadastroPet(event)
{
    event.preventDefault()

    console.log("cheguei aqui!")
    let Nome = document.getElementById('NomePet').value
    let Idade = document.getElementById('IdadePet').value
    let Descricao = document.getElementById('DescricaoPet').value
    let Cor = document.getElementById('CorPet').value
    let Url = document.getElementById('UrlFoto').value
    let tipo = document.getElementById('tipo').value

    if(Nome === "")
        {
            document.getElementById('NomePet').style.borderColor = "red"
            document.getElementById('mensagem-Nome').innerText = "Burrao"
            
        }

    else
    {
        document.getElementById('NomePet').style.borderColor = ""
    }

    if(Idade === "")
    {
        document.getElementById('IdadePet').style.borderColor = "red"
        document.getElementById('mensagem-Idade').innerText = "Burrao"
        
    }
    else
    {
        document.getElementById('IdadePet').style.borderColor = ""
    }

    if(Descricao === "")
        {
            document.getElementById('DescricaoPet').style.borderColor = "red"
            document.getElementById('mensagem-Descricao').innerText = "Burrao"
        }
    else
        {
            document.getElementById('DescricaoPet').style.borderColor = ""
        }

    if(Url === "")
        {
            document.getElementById('UrlFoto').style.borderColor = "red"
            document.getElementById('mensagem-Url').innerText = "Burrao"
            
        }
    else
        {
            document.getElementById('UrlFoto').style.borderColor = ""
        }

    if(Nome && Descricao && Idade && Url )
        {
            let pet =
            {
                Nome: Nome,
                Idade: Idade,
                Descricao: Descricao,
                Url: Url,
                Cor: Cor,
                id: Date.now(),
                Tipo: tipo
            }  
        
        let Lista = JSON.parse(localStorage.getItem('Pets'))

        if(Lista === null) Lista = []
        

        Lista.push(pet)
            
        localStorage.setItem("Pets", JSON.stringify(Lista))

        
        }

        
    }







document
.getElementById('Form')
.addEventListener('submit', cadastroPet)