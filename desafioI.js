async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
        }
        
        const posts = await response.json();
        showFirst20Posts(posts);
        await receiveInfo();

    } catch (error) {
        console.error('Ocurrió un error:', error);
        mostrarError(error.message);
    }
}

function showFirst20Posts(posts) {
    const postContainer = document.getElementById('post-data');
    
    const postsHTML = `
        <ul>
            ${posts.slice(0, 20).map(post => `
                <li>
                    <strong>${post.title}</strong>
                    <p>${post.body}</p>
                </li>
            `).join('')}
        </ul>
    `;
    
    postContainer.innerHTML = postsHTML;
}

function sendInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada');
        }, 3000);
    });
}

async function receiveInfo() {
    const message = await sendInfo();
    alert(message);
}
