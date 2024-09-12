import ImageSlider from "@/components/imageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
    const result = serverSideFunction();
    console.log("Server Route rendered");
    return <>
   <h1>Server Route Page</h1>
   <p>{result}</p>
   <ImageSlider/>
   </>;
}