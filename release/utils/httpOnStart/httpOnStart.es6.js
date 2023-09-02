function httpOnStart({ port, https }) {
    console.log(`http${https ? 's' : ''}://localhost:${port}`);
}

export { httpOnStart };
