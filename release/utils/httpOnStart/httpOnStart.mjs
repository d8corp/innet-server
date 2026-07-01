function httpOnStart({ apiPaths, https, port, }) {
    apiPaths.forEach(path => {
        console.log(`http${https ? 's' : ''}://localhost:${port}${path}`);
    });
}

export { httpOnStart };
