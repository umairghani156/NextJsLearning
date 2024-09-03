const  Modal = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
            {children}
        </div>
    )
};

export default Modal;