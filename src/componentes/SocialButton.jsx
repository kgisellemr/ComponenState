const SocialButton = (props) => {
    return (
        <>
            <div className="social-icon-item">
                <i className={`fa-brands fa-${props.icon}`}></i>
            </div>
        </>
    )
}

export default SocialButton;