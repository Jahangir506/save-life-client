const TitleSection = ({subHeading, heading, contact}) => {
    return(
        <>
             <div className="text-center space-y-3">
                <p className="text-red-500 uppercase font-semibold">{subHeading}</p>
                <h2 className="text-5xl text-black font-bold">{heading}</h2>
                <h2 className="text-4xl text-red-500 font-bold">{contact}</h2>
             </div>
        </>
    )}
export default TitleSection;