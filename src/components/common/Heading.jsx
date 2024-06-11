
const Heading = ({ title, className }) => {
    return <h2 className={`text-white font-medium text-2xl sm:text-4xl lg:text-5xl lg:!leading-[48px] ${className}`}>{title}</h2>
}
export default Heading
