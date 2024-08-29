export default function Page({params}: {params: {slug: string[]}}) {
    if(params.slug?.length === 2) {
        return (
           <div>
           <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
       </div>
        );
    }else if(params.slug?.length === 1) {
        return (
            <div>
                <h1>Viewing docs for feature {params.slug[0]}</h1>
            </div>
        );
    }
    return (
        <h1>Docs Home Page</h1>
    );
}