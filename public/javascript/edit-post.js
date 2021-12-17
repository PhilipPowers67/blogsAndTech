async function editFormHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('input[name="post_title"]').value.trim();
    const post_text = document.querySelector('input[name="post_text"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_text
        }),
        header: {
            'Content-Type': 'application/json'
        }
    });
    // if (response.ok) {
    //     document.location.replace('/dashboard/');
    // } else {
    //     alert(response.statusText);
    // }
    console.log(post_title, post_text)
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);