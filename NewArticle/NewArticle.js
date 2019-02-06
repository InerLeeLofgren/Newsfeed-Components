//get the newArticle form
const newArticle = document.querySelector('.newArticleForm')

//get the button from the form
const formSubmit = newArticle.querySelector('button')
//addEventListener to the button
formSubmit.addEventListener('click', event => {
    //prevent page refreash on button press
    event.preventDefault()
    
    //grab the title for the new article
    const title = newArticle.querySelector('input').value
    //grab the content for the new article
    const articleBody = newArticle.querySelector('textarea').value

    //check if content is empty and alert if it is
    title.length < 1 || articleBody.length < 1 ? alert('Please enter info') : console.log('posting article')
    
    //create the div element and child elements
    const articleDiv = document.createElement('div')
    const newTitle = document.createElement('h2')
    const newDate = document.createElement('p')
    const newContent = document.createElement('p')
    const newButton = document.createElement('span')

    //set content of new article
    newTitle.textContent = title;
    newDate.textContent = new Date();
    newContent.textContent = articleBody;
    newButton.textContent = 'expand';

    //assign classes to created elements
    newDate.classList.add('date')
    articleDiv.classList.add('article')
    newButton.classList.add('expandButton')

    //construct the new Article
    articleDiv.appendChild(newTitle)
    articleDiv.appendChild(newDate)
    articleDiv.appendChild(newContent)
    articleDiv.appendChild(newButton)

    //place the new article in the articles div
    const articlesHook = document.querySelector('.articles')
    articlesHook.prepend(articleDiv)

    newArticle.querySelector('input').value = ''
    newArticle.querySelector('textarea').value = ''

    articleDiv = new Article(articleDiv)
})

