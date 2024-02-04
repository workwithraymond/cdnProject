import { createClient } from 'contentful';

const client = createClient({
    space: 'miitonmu7vce',
    environment: 'master',
    accessToken: '8Zl7YNbZ38WHO2IEbYVRJE0LJqR3DNQ0PzjZVO0-gXk',
});

client.getEntries({content_type: 'projects' })
.then((response) => console.log(response));