import "./styles.css";

export default function PhotoFeedLayout(props:{
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    )
}