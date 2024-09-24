async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
        }
        
        // Convertir la respuesta a formato JSON
        const posts = await response.json();

        // Llamamos a la función para mostrar los resultados
        showPosts(posts);

    } catch (error) {
        console.error('Ocurrió un error:', error);
        mostrarError(error.message);
    }
}

function showPosts(posts) {
    const postContainer = document.getElementById('post-data');
    
    const postsHTML = `
        <ul>
            ${posts.map(post => `
                <li>
                    <strong>${post.title}</strong>
                    <p>${post.body}</p>
                </li>
            `).join('')}
        </ul>
    `;
    
    postContainer.innerHTML = postsHTML;
}




