import { redirect } from "next/navigation"
import { comments } from "../data"

export async function GET(request: Request, {
    params
}: {
    params: {
        id: string
    }
}) {
    if(parseInt(params.id) > comments.length){
        redirect("/comments")
    }
    const comment = comments.find((comment) => comment.id === Number(params.id))
    return Response.json(comment)
    
}

export async function PATCH(request: Request, {
    params
}: {
    params: {
        id: string
    }
}) {
    const body = await request.json();
    const {text} = body;
    // const updatedComment = {
    //     ...comments.find((comment) => comment.id === Number(params.id)),
    //     ...comment
    // }
   // comments[comments.findIndex((comment) => comment.id === Number(params.id))] = updatedComment

   const indexcomment = comments.findIndex((comment) => comment.id === Number(params.id));
   comments[indexcomment].text = text;

    return Response.json(comments[indexcomment])
};

export async function DELETE(request: Request, {
    params
}: {
    params: {
        id: string
    }
}) {

   // const indexcomment = comments.splice(comments.findIndex((comment) => comment.id === Number(params.id)), 1);
   const index = comments.findIndex((comment) => comment.id === Number(params.id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json({
        status: 200,
        ...deletedComment
    })
}