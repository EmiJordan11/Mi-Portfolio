
// lg:text-4xl
// md:text-3xl

export const SocialItem = ({icon: Icon, link}) => {
    return (
        <>
            <a href={link} target="_blank" 
            className="
                text-4xl transition ease duration-300 hover:scale-125 hover:text-[#ea7c22]
                max-lg:text-3xl 
            ">
                <Icon></Icon>
            </a>
            
        </>
    )
}