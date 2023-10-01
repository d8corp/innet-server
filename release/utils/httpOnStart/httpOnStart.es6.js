function httpOnStart({ https, port, }) {
    console.log(`http${https ? 's' : ''}://localhost:${port}`);
}

export { httpOnStart };
