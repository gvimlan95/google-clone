function Avatar({url}) {
    return (
        <img loading="lazy" className="cursor-pointer h-10 rounded-full transition duration-150 transform hover:scale-110" src={url} alt="profile pic" />
    )
}

export default Avatar
