
export const SocialItem = ({icon: Icon, link}) => {
    return (
        <>
            <a href={link} target="_blank" className="transition ease duration-300 hover:scale-125 hover:text-[#ea7c22]">
                <Icon></Icon>
            </a>
            
        </>
    )
}