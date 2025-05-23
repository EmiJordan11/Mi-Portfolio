
export const SocialItem = ({icon: Icon, link}) => {
    return (
        <>
            <a href={link} target="_blank">
                <Icon></Icon>
            </a>
            
        </>
    )
}