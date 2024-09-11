import "server-only";
export const serverSideFunction = () =>{
    console.log(`
        use multiple libraries,
        use environment variables,
        use cookies,
        interact with a database,
        interact with an API,
        interact with other servers,
        process confidential information/data
        `);
    return 'Server Side result';
    
}