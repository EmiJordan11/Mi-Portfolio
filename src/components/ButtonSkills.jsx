
export const ButtonSkills = ({ children, id, isActive, onClick }) => {

    const classButton = isActive
                        ? 'border-3 border-[#5951ee] rounded-[12px] p-2.5 bg-[#5951ee] cursor-pointer'
                        : 'border-3 border-[#655593] rounded-[12px] p-2.5 bg-[#655593] cursor-pointer'
        
    return (
        <li className= {classButton}
        onClick={()=>onClick(id)}
        >
            {children}
        </li>
    )
}