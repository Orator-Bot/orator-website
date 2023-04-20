import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Have you lost your way, kiddo?',
        'Damn it! This dead-end road.',
        'The Aurors blocked this road, Harry!',
        'Let me help in guiding you.'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page not found."} />
}

export default UnkownPage;

